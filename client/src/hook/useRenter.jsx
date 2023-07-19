import { useEffect, useState } from "react";


const useRenter = (user) => {
    const [isRenter,setIsRenter]=useState(false)
    const [isRenterLoading,setIsRenterLoading]=useState(true)

        useEffect(()=>{
            if(user?.role== "renter"){
                setIsRenter(true)
                setIsRenterLoading(false)
            }
        },[user])
  return [isRenter,isRenterLoading]
};

export default useRenter
