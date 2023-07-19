import React from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import HouseCard from "../../../components/HouseCard";

const Allhouses = () => {
  const {
    data: houses = [],
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
        // console.log(data);
        return data;
      } catch (error) {
        toast.error("Internal Error");
      }
    },
  });
  if (isLoading) {
    return <p>loading</p>;
  }
  return <div>
    <div className="grid lg:grid-cols-3  md:grid-cols-2  grid-cols-1">
        {
            houses?.data?.properties?.length && houses?.data?.properties.map((property)=>(<HouseCard key={property._id} property={property}></HouseCard>))
        }
    </div>
  </div>
};

export default Allhouses;
