import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { AuthContext } from "../context/AuthProvider";
import { toast } from 'react-hot-toast';
const AddHouseModal = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const {token,user} =useContext(AuthContext)
  console.log(token,user);
  const handleAddHouse=async(data)=>{
    console.log(data);
    data.owner={
        id:user._id,
        fullName:user.fullName,
        email:user.email,
    }
    
      const res = await fetch("http://localhost:8080/api/v1/house/add",{
          method:"POST",
          headers:{
            "content-type":"application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body:JSON.stringify(data)
        });
    const result= await res.json()
   if(result.status=="Success"){
        toast.success(`${result.data.result.name} Property added to your list`,{id:"House"})
   }
   if(result.status=="Fail"){
        toast.error(`Fail to add property to your list`,{id:"House"})
   }
  }
  return (
    <>
      <input type="checkbox" id="add_house" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(handleAddHouse)}>
            <h3 className="font-bold text-lg">Hello!</h3>
            <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
              <div>
                <label className="font-medium">House Name</label>
                <input
                  {...register("name", {
                    required: "Name is required",
                  })}
                  type="text"
                  name="name"
                  className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border 
                focus:border-indigo-600
                 shadow-sm rounded-lg`}
                />
                {errors.name?.message && (
                  <small className="text-orange-700">
                    {errors.name.message}
                  </small>
                )}
              </div>
              <div>
                <label className="font-medium">Address</label>
                <input
                  {...register("address", {
                    required: "Address is required",
                  })}
                  type="text"
                  name="address"
                  className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border 
                focus:border-indigo-600
                } shadow-sm rounded-lg`}
                />
                {errors.address?.message && (
                  <small className="text-orange-700">
                    {errors.address.message}
                  </small>
                )}
              </div>
              <div>
                <label className="font-medium">City</label>
                <input
                  {...register("city", {
                    required: "City is required",
                  })}
                  type="text"
                  name="city"
                  className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border 
                focus:border-indigo-600
                } shadow-sm rounded-lg`}
                />
                {errors.city?.message && (
                  <small className="text-orange-700">
                    {errors.city.message}
                  </small>
                )}
              </div>
              <div>
                <label className="font-medium">Bedrooms</label>
                <input
                  {...register("bedroom", {
                    required: "Bedroom Number is required",
                  })}
                  type="text"
                  name="bedroom"
                  className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border 
                focus:border-indigo-600
                } shadow-sm rounded-lg`}
                />
                {errors.bedroom?.message && (
                  <small className="text-orange-700">
                    {errors.bedroom.message}
                  </small>
                )}
              </div>
              <div>
                <label className="font-medium">Bathrooms</label>
                <input
                  {...register("bathroom", {
                    required: "Bathroom Number is required",
                  })}
                  type="text"
                  name="bathroom"
                  className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border 
                focus:border-indigo-600
                 shadow-sm rounded-lg`}
                />
                {errors.bathroom?.message && (
                  <small className="text-orange-700">
                    {errors.bathroom.message}
                  </small>
                )}
              </div>
              <div>
                <label className="font-medium">Room Size</label>
                <input
                  {...register("roomSize", {
                    required: "Room Size is required",
                  })}
                  type="text"
                  name="roomSize"
                  className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border 
                focus:border-indigo-600
                 shadow-sm rounded-lg`}
                />
                {errors.roomSize?.message && (
                  <small className="text-orange-700">
                    {errors.roomSize.message}
                  </small>
                )}
              </div>
              <div>
                <label className="font-medium">Picture URL</label>
                <input
                  {...register("picture", {
                    required: "Picture is required",
                  })}
                  type="text"
                  name="picture"
                  className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border 
                focus:border-indigo-600
                 shadow-sm rounded-lg`}
                />
                {errors.picture?.message && (
                  <small className="text-orange-700">
                    {errors.picture.message}
                  </small>
                )}
              </div>
              <div>
                <label className="font-medium">Available Date</label>
                <input
                  {...register("availableDate", {
                    required: "Available Date is required",
                  })}
                  type="date"
                  name="availableDate"
                  className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border 
                focus:border-indigo-600
                 shadow-sm rounded-lg`}
                />
                {errors.availableDate?.message && (
                  <small className="text-orange-700">
                    {errors.availableDate.message}
                  </small>
                )}
              </div>
              <div>
                <label className="font-medium">Rent Per Month</label>
                <input
                  {...register("rent", {
                    required: "Rent Per Month is required",
                  })}
                  type="text"
                  name="rent"
                  className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border 
                focus:border-indigo-600
                 shadow-sm rounded-lg`}
                />
                {errors.rent?.message && (
                  <small className="text-orange-700">
                    {errors.rent.message}
                  </small>
                )}
              </div>
              <div>
                <label className="font-medium">Phone Number</label>
                <input
                  {...register("phone", {
                    required: "Phone Number is required",
                  })}
                  type="number"
                  name="phone"
                  className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border 
                focus:border-indigo-600
                 shadow-sm rounded-lg`}
                />
                {errors.phone?.message && (
                  <small className="text-orange-700">
                    {errors.phone.message}
                  </small>
                )}
              </div>
              <div>
                <label className="font-medium">Description</label>
                <input
                  {...register("description", {
                    required: "Short Description is required",
                  })}
                  type="text"
                  name="description"
                  className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border 
                focus:border-indigo-600
                 shadow-sm rounded-lg`}
                />
                {errors.description?.message && (
                  <small className="text-orange-700">
                    {errors.description.message}
                  </small>
                )}
              </div>
            </div>
            <button className="my-4 w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
             Add Property
            </button>
          </form>
          <div className="modal-action">
            <label htmlFor="add_house" className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddHouseModal;
