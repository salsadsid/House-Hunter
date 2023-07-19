import React, { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";

const UpdateHouseModal = ({ property, refetch,setHouseInfo }) => {
  const {
    name,
    address,
    city,
    phone,
    bedroom,
    bathroom,
    picture,
    rent,
    roomSize,
    description,
    availableDate,
  } = property;
  console.log(name);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      name,
      address,
      city,
      phone,
      bedroom,
      bathroom,
      picture,
      rent,
      roomSize,
      description,
      availableDate,
    },
  });
  //   useEffect(() => {
  //     // you can do async server request and fill up form
  //     setTimeout(() => {
  //       reset({
  //         name: property.name,
  //       });
  //     }, 2000);
  //   }, [reset,property]);

  const handleAddHouse = async (data) => {
    const moddedData = {
      ...property,
      name: data.name,
      address: data.address,
      city: data.city,
      phone: data.phone,
      bedroom: data.bedroom,
      bathroom: data.bathroom,
      picture: data.picture,
      rent: data.rent,
      roomSize: data.roomSize,
      description: data.description,
      availableDate: data.availableDate,
    };
    const res = await fetch(`http://localhost:8080/api/v1/house/update/${property._id}`,{
          method:"PATCH",
          headers:{
            "content-type":"application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body:JSON.stringify(moddedData)
        });
    const result= await res.json()
    console.log(result);
   if(result.data.modifiedCount){
        toast.success(`Property data updated`,{id:"House"})
        refetch();
        reset();
      setHouseInfo(null)
   }
   if(result.status=="Fail"){
        toast.error(`Fail to update property data`,{id:"House"})
   }
  };

  return (
    <>
      <input type="checkbox" id="update_house" className="modal-toggle" />
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
              Update Property
            </button>
          </form>
          <div className="modal-action">
            <label htmlFor="update_house" className="btn"onClick={()=>setHouseInfo(null)}>
              Close!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateHouseModal;
