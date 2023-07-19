import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import HouseCard from "../../../components/HouseCard";
import { useForm } from "react-hook-form";

const Allhouses = () => {
  const [house,setHouse]=useState([])
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    data,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["houses"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:8080/api/v1/house/", {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
        });
        const data = await res.json();
        setHouse(data.data.properties)
        return data;
      } catch (error) {
        toast.error("Internal Error");
      }
    },
  });
  if (isLoading) {
    return <p>loading</p>;
  }
  const handleSearch = (data) => {
    const{filter,keyword}=data
   const searchedHouse= house.filter(h=>h[filter].includes(keyword))
   setHouse(searchedHouse)
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(handleSearch)}
        className="mt-8 flex justify-center items-center gap-4"
      >
        <div className="max-w-xs">
          <label className=" font-medium " htmlFor="filter">
            Filter
          </label>
          <select
            name="filter"
            id="filter"
            {...register("filter", {
              required: "Filter is Required",
            })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full mt-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="city">City</option>
            <option value="bedroom">Bedrooms</option>
            <option value="bathroom">bathrooms</option>
            <option value="roomSize">Room Size</option>
            <option value="availableDate">Available Date</option>
            <option value="rent">Rent Per Month</option>
          </select>
          {errors.filter?.message && (
            <small className="text-orange-700">{errors.filter.message}</small>
          )}
        </div>
        <div className="max-w-xs">
          <label className="font-medium">Keyword</label>
          <input
            type="text"
            {...register("keyword", {
              required: "Keyword is required",
              
            })}
            className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border ${
              errors.keyword?.message
                ? "focus:border-red-500"
                : "focus:border-indigo-600"
            } shadow-sm rounded-l`}
          />
          {errors.keyword?.message && (
            <small className="text-orange-700">{errors.keyword.message}</small>
          )}
        </div>
        <button className="max-w-xs px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
          Search
        </button>
      </form>
      <div className="grid lg:grid-cols-3  md:grid-cols-2  grid-cols-1">
        {house?.length &&
          house?.map((property) => (
            <HouseCard key={property._id} property={property}></HouseCard>
          ))}
      </div>
    </div>
  );
};

export default Allhouses;
