import { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const createUser = async (userData) => {
    console.log(userData);
    const res = await fetch("http://localhost:8080/api/v1/user/sign", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data =await res.json();
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
    const data =await res.json();
    console.log(data);
    return data;
  };
  const authInfo = {
    createUser,
    loginUser,
    user: "Salman",
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
