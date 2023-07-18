import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState("");

 useEffect(()=>{
  if(token){
    localStorage.setItem('accessToken',token)
  }
  if(!token){
    const getToken = localStorage.getItem("accessToken");
    setToken(getToken);
  }
 },[token,setToken])
  const createUser = async (userData) => {
    console.log(userData);
    const res = await fetch("http://localhost:8080/api/v1/user/sign", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await res.json();
    console.log(data);
    return data;
  };
  const loginUser = async (userData) => {
    console.log(userData);
    const res = await fetch("http://localhost:8080/api/v1/user/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await res.json();
    console.log(data);
    return data;
  };
  const authInfo = {
    createUser,
    loginUser,
    user,
    setUser,
    token,
    setToken,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
