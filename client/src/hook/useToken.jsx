import  { useContext, useEffect, useState, } from 'react';
import { AuthContext } from '../context/AuthProvider';

const useToken = (token) => {
    const [userInfo,setUserInfo]=useState("")
    useEffect(()=>{
        if(token){
            fetch(`https://house-hunter-rrlc.onrender.com/api/v1/user/persistAuth`,{
                method:"GET",
                headers:{
                  "content-type":"application/json",
                  authorization: `Bearer ${token}`,
                },
            })
    .then(res=>res.json())
    .then(data=>{
      if(data){
     setUserInfo(data.user)
      }
    })
        }
    },[token])
    return [userInfo]
};

export default useToken;