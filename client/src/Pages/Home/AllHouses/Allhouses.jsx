import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import HouseCard from "../../../components/HouseCard";
import { useForm } from "react-hook-form";

const Allhouses = () => {
  const [house, setHouse] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    fetch(`https://house-hunter-rrlc.onrender.com/api/v1/house/?page=${page}&size=${size}`)
        .then(res => res.json())
        .then(data =>  setHouse(data.data.properties))
}, [page, size])
       
  useEffect(() => {
    fetch("https://house-hunter-rrlc.onrender.com/api/v1/house/count")
      .then((res) => res.json())
      .then((data) => {
        const count = data.data.result;
        const pages = Math.ceil(count / 10);
        setPageCount(pages);
      });
  }, []);
  

  const handleSearch = (data) => {
    const { filter, keyword } = data;
    const searchedHouse = house.filter((h) => h[filter].includes(keyword));
    setHouse(searchedHouse);
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
      <div className="pagination">
        {[...Array(pageCount).keys()].map((number) => (
          <button
            className={page === number ? "selected btn" : "btn"}
            onClick={() => setPage(number)}
          >
            {number + 1}
          </button>
        ))}
      </div>
      <div>
        <select onChange={(e) => setSize(e.target.value)} className="btn">
          <option value="5">5</option>
          <option value="10" selected>
            10
          </option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
};

export default Allhouses;
