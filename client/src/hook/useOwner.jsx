import { useEffect, useState } from "react";


const useOwner = (user) => {
    const [isOwner,setIsOwner]=useState(false)
    const [isOwnerLoading,setIsOwnerLoading]=useState(true)

        useEffect(()=>{
            if(user?.role== "owner"){
                setIsOwner(true)
                setIsOwnerLoading(false)
            }
        },[user])
  return [isOwner,isOwnerLoading]
};

export default useOwner
