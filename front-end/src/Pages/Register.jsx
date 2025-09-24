import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { signUpApi } from "../../api/api";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
    try {
      console.log("submitting data:", data);
      console.log("username value:", data.username);
      console.log("username length:", data.username?.length);
      await signUpApi(data);
      //navigate
      navigate("/upload");
    } catch (error) {
      console.error("full error:", error.response?.data);
      alert(
        "sign up failed:" + (error.response?.data.message || error.message)
      );
      console.log(error);
    }
  };

  return (
    <div className="bg-[#93ACEA] flex flex-col justify-center items-center min-h-screen">
      <div className="bg-white shadow-lg max-w-md w-full rounded-lg p-10">
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div className="text-center">
            <h1 className="font-bold  text-4xl sm:text-3xl md:text-4xl lg:text-5xl tracking-widest">
              Welcome!
            </h1>
            <p className="text-lg sm:text-base md:text-lg lg:text-xl mt-2">
              Sign up to get started
            </p>
          </div>

          {/*username*/}
          <div className="mt-10 space-y-6 ">
            <div className="">
              <label
                htmlFor="username"
                className=" block text-sm font-semibold text-gray-700"
              >
                Username
              </label>
              <input
                {...register("username", { required: "username is required" })}
                type="text"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#6A9ACA] focus:outline-none  bg-gray-50 focus:bg-white"
                name="username"
                id="username"
                placeholder="Enter your username"
              ></input>
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">
                  username is required
                </p>
              )}
            </div>
            {/*email*/}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700"
              >
                Email
              </label>
              <input
                {...register("email", {
                  required: "email is required",
                  minLength: {
                    value: 3,
                    message: "username must be at least 3 characters",
                  },
                  maxLength: {
                    value: 35,
                    message: "username must not exceed 35 characters",
                  },
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "please enter a valid email(e.g,angela@gmail.com)",
                  },
                })}
                type="email"
                className="w-full px-4 py-3 border-2  border-gray-200 rounded-xl focus:border-[#6A9ACA] focus:outline-none  bg-gray-50 focus:bg-white"
                name="email"
                id="email"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            {/*password*/}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700"
              >
                Password
              </label>
              <input
                {...register("password", {
                  required: "password is required",

                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message: "please enter a valid password (e.g,Mypassw@rd1)",
                  },
                })}
                type="password"
                className="w-full px-4 py-3  border-2 border-gray-200 rounded-xl focus:border-[#6A9ACA] focus:outline-none  bg-gray-50 focus:bg-white"
                name="password"
                id="password"
                placeholder="Enter your password"
              ></input>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-[#0D2841]  text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-200 mt-4"
            >
              sign up
            </button>
            <p>
              already have an account{" "}
              <Link to="/login">
                <span className="text-blue-700">login </span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
