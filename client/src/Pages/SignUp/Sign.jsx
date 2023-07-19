import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-hot-toast";

const Sign = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { user, createUser, loading, setToken, setLoading } =
    useContext(AuthContext);

  console.log(user);
  const handleSignUp = async (data) => {
    console.log(data);
    const result = await createUser({ ...data, confirmPassword: undefined });
    if (result.status == "Fail") {
      console.log(result.error.keyPattern.email);
      if (result.error.keyPattern.email) {
        toast.error("User Already Exist!", { id: "User" });
      } else {
        toast.error("User Already Exist!", { id: "User" });
      }
    }
    if (result.status == "Success") {
      setLoading(true)
      localStorage.setItem('accessToken',result.data.token)    
      setToken(result.data.token)
    }
    //
  };
  if(user){
    setLoading(false)
    navigate("/dashboard")
  }
  if(loading){
    return <p>Loadig ...</p>
  }
  return (
    <section className="w-full flex flex-col items-center justify-center bg-gray-50 sm:px-4">
      <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
        <div className="text-center">
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Create an account
            </h3>
            <p className="">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
        <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg">
          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-5">
            <div>
              <label className="font-medium">Full Name</label>
              <input
                type="text"
                name="fullName"
                {...register("fullName", {
                  required: true,
                })}
                className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border ${
                  errors.fullName?.type === "required"
                    ? "focus:border-red-500"
                    : "focus:border-indigo-600"
                } shadow-sm rounded-lg`}
              />
              {errors.fullName?.type === "required" && (
                <small className="text-orange-700">Full Name is required</small>
              )}
            </div>
            <div>
              <label className=" font-medium " htmlFor="role">
                Role
              </label>
              <select
                name="role"
                id="role"
                {...register("role", {
                  required: "Role is Required",
                })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full mt-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="renter">House Renter</option>
                <option value="owner">House Owner</option>
              </select>
              {errors.role?.message && (
                <small className="text-orange-700">
                  {errors.role.message}
                </small>
              )}
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
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  validate: {
                    matchPattern: (v) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                      "Email address must be a valid address",
                  },
                })}
                className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border ${
                  errors.email?.message
                    ? "focus:border-red-500"
                    : "focus:border-indigo-600"
                } shadow-sm rounded-lg`}
              />
              {errors.email?.message && (
                <small className="text-orange-700">
                  {errors.email.message}
                </small>
              )}
            </div>
            <div>
              <label className="font-medium">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  validate: {
                    minLength: (v) =>
                      v.length > 5 || "Password must have 6 characters",
                    matchPattern: (v) =>
                      /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/.test(v) ||
                      "Password must have at least 1 letter and number.",
                  },
                })}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
              {errors.password?.message && (
                <small className="text-orange-700">
                  {errors.password.message}
                </small>
              )}
            </div>
            <div>
              <label className="font-medium">Confirm Password</label>
              <input
                type="password"
                {...register("confirmPassword", {
                  required: "Password is required",
                  validate: {
                    match: (v) =>
                      watch("password") === v || "Password doesn't match.",
                  },
                })}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
              {errors.confirmPassword?.message && (
                <small className="text-orange-700">
                  {errors.confirmPassword.message}
                </small>
              )}
              {/* // {password!==confirmPassword && <small className="text-orange-700">Password does not match.</small>} */}
            </div>
            <button
              className={`w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600  rounded-lg duration-150`}
            >
              Create account
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Sign;
