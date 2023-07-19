import React from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';

const BookingList = () => {
    const {
        data: bookings=[],
        isLoading,
        refetch,
      } = useQuery({
        queryKey: ["bookings"],
        queryFn: async () => {
          try {
            const res = await fetch("http://localhost:8080/api/v1/booking/get", {
              method: "GET",
              headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
            });
            const data = await res.json();
            // console.log(data);
            return data;
          } catch (error) {
            toast.error("Internal Error");
          }
        },
      });

      const handleBookingRemove=async(id)=>{
        try {
            const res = await fetch(`http://localhost:8080/api/v1/booking/delete/${id}`, {
              method: "DELETE",
              headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
            });
            const data = await res.json();
           if(data.data.acknowledged){
            refetch()
            toast.success("Successfully Deleted");
           }
           
          } catch (error) {
            toast.error("Internal Error");
          }
      }
    return (
        <div>
      <div className="flex mb-4">
        <p className="text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
          Booking List
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th></th>
              <th>House Name</th>
              <th>House Address</th>
              <th>Booked By</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.data?.length && bookings?.data?.map((booking) => (
              <tr key={booking._id}>
                <th>1</th>
                <td>{booking.house.name}</td>
                <td>{booking.house.address}</td>
                <td>{booking.rentedBy.fullName}</td>
                <td>{booking.rentedBy.email}</td>
                <td>{booking.rentedBy.phone}</td>
                <td><button onClick={()=>handleBookingRemove(booking._id)} className='g-yellow-500 text-white active:bg-yellow-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'>Delete</button></td>
              </tr>
            ))}

            </tbody>
        </table>
      </div>
    
    </div>
    );
};

export default BookingList;