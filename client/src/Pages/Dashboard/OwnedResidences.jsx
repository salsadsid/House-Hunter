import { useContext, useState } from "react";
import AddHouseModal from "../../components/AddHouseModal";
import { AuthContext } from "../../context/AuthProvider";
import { useQuery } from "react-query";
import { toast } from "react-hot-toast";
import UpdateHouseModal from "../../components/UpdateHouseModal";

const OwnedResidences = () => {
  const { user, token } = useContext(AuthContext);
  const [houseInfo,setHouseInfo]=useState(null)
  const {
    data: houses=[],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["houses"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:8080/api/v1/house/all", {
          method: "GET",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        console.log(data);
        return data;
      } catch (error) {
        toast.error("Internal Error");
      }
    },
  });
  // console.log(houses.data.properties,"prdsao");
  if(isLoading){
    return <p>loading</p>
  }
  const closeModal=()=>{
    setHouseInfo(null)
  }
  return (
    <div>
      <div className="flex justify-between">
        <p className="text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
          Property List
        </p>
        <label
          htmlFor="add_house"
          className="flex items-center justify-between text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          {" "}
          <svg
            style={{ color: "white" }}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="font-bold"
            viewBox="0 0 16 16"
          >
            {" "}
            <path
              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
              fill="white"
            ></path>{" "}
          </svg>
          Add New House
        </label>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Address</th>
              <th>City</th>
              <th>Phone</th>
              <th>Rent Per Month</th>
              <th>Room Size</th>
              <th>Bedrooms</th>
              <th>Bathrooms</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {houses?.data?.properties?.length && houses?.data?.properties.map((property) => (
              <tr key={property._id}>
                <th>1</th>
                <td>{property.name}</td>
                <td>{property.address}</td>
                <td>{property.city}</td>
                <td>{property.phone}</td>
                <td>{property.rent}</td>
                <td>{property.roomSize}</td>
                <td>{property.bedroom}</td>
                <td>{property.bathroom}</td>
                <td><label
          htmlFor="update_house" onClick={()=>setHouseInfo(property)}>Edit</label></td>
              </tr>
            ))}

            </tbody>
        </table>
        {
          houseInfo &&  <UpdateHouseModal
          property={houseInfo}
          closeModal={closeModal}
          refetch={refetch}
          ></UpdateHouseModal>
        }
      </div>
      <AddHouseModal></AddHouseModal>
    </div>
  );
};

export default OwnedResidences;
