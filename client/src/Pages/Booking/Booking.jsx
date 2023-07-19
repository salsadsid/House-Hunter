import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-hot-toast';

const Booking = () => {
    const houseInfo =useLoaderData()
    const {user}=useContext(AuthContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        defaultValues:{
            fullName:user?.fullName,
            email:user?.email
        }
      });
    const {
        _id,
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
      } = houseInfo.data;

      const handleBooking=async(data)=>{
          data.rentedBy={
              ...data
          }
            data.house={
                name:name,
                address:address,
                id:_id
            }
            const res = await fetch("https://house-hunter-rrlc.onrender.com/api/v1/booking/add",{
          method:"POST",
          headers:{
            "content-type":"application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body:JSON.stringify(data)
        });
    const result= await res.json()
    console.log(result);
   if(result.status=="Success"){
        toast.success(`${result.data.house.name} added to your list`,{id:"Booking"})
   }
   if(result.status=="Fail"){
        toast.error(`${result.message}`,{id:"Booking"})
   }
      }
    return (
        <div className='flex items-center justify-center'>
<div className="block rounded-lg p-4 shadow-sm shadow-indigo-100 max-w-2xl">
      <img
        alt="Home"
        src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        className="h-56 w-full rounded-md object-cover"
      />

      <div className="mt-2">
        <dl>
          <div>
            <dt className="sr-only">Price</dt>

            <dd className="text-sm text-gray-500">BDT: {rent}<small>/per month</small></dd>
          </div>

          <div>
            <dt className="sr-only">Name</dt>

            <dd className="font-medium">{name}</dd>
          </div>
          <div>
            <dt className="sr-only">Address</dt>

            <dd className="font-normal text-xs">Address: {address} </dd>
          </div>
          <div>
            <dt className="sr-only">City</dt>

            <dd className="font-normal text-xs">City: {city} </dd>
          </div>
        </dl>

        <div className="mt-6 flex items-center gap-8 text-xs">
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <svg
              className="h-4 w-4 text-indigo-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
              />
            </svg>

            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Room Size</p>

              <p className="font-medium">{roomSize}</p>
            </div>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <svg
              className="h-4 w-4 text-indigo-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>

            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Bathroom</p>

              <p className="font-medium">{bathroom}</p>
            </div>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <svg
              className="h-4 w-4 text-indigo-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>

            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Bedroom</p>

              <p className="font-medium">{bedroom}</p>
            </div>
          </div>
        </div>
        <div className="mt-6">
            <p className='text-sm'>Description: {description}</p>
        </div>
        <div className="mt-6">
        <form onSubmit={handleSubmit(handleBooking)} className="mt-8 space-y-5">
          <div>
                <label className="font-medium">Full Name</label>
                <input
                readOnly
                  type="fullName"
                  {...register("fullName", {
                    required: "FullName is required",
                  })}
                  className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border ${errors.email?.message ? "focus:border-red-500": "focus:border-indigo-600"} shadow-sm rounded-l`}
                />
                {errors.fullName?.message && <small className="text-orange-700">{errors.fullName.message}</small>}
                
              </div>
          <div>
                <label className="font-medium">Email</label>
                <input
                readOnly
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    validate: {
                      matchPattern: (v) =>
                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                        "Email address must be a valid address",
                    },
                  })}
                  className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border ${errors.email?.message ? "focus:border-red-500": "focus:border-indigo-600"} shadow-sm rounded-l`}
                />
                {errors.email?.message && <small className="text-orange-700">{errors.email.message}</small>}
                
              </div>
              <div>
              <label className="font-medium">Phone Number</label>
              <input
                type="text"
                name="phone"
                {...register("phone", {
                  required: true,
                })}
                className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border ${
                  errors.phone?.type === "required"
                    ? "focus:border-red-500"
                    : "focus:border-indigo-600"
                } shadow-sm rounded-lg`}
              />
              {errors.phone?.type === "required" && (
                <small className="text-orange-700">
                  Phone Number is required
                </small>
              )}
            </div>
            <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
              Submit
            </button>
          </form>
        </div>

      </div>
    </div>
        </div>
    );
};

export default Booking;