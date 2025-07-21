import React from "react";
import { ImFacebook } from "react-icons/im";
import { FaGoogle } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";

const Login = () => {
  return (
    <div className="bg-[#93ACEA] flex flex-col justify-center items-center min-h-screen">
      <div className="bg-white shadow-lg max-w-md w-full rounded-lg p-10">
        <form className="">
          <div className="text-center">
            <h1 className="font-bold  text-3xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wide">
              Good to see you!
            </h1>
            <p className="text-lg sm:text-base md:text-lg lg:text-xl mt-2">
              Let's continue the journey
            </p>
          </div>

          {/*username*/}
          <div className="mt-10 space-y-6 ">
            {/* <div className="">
              <label
                htmlFor="Username"
                className=" block text-sm font-semibold text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#6A9ACA] focus:outline-none  bg-gray-50 focus:bg-white"
                name="Username"
                id="Username"
                placeholder="Enter your username"
              ></input>
            </div> */}
            {/*email*/}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700"
              >
                Email
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border-2  border-gray-200 rounded-xl focus:border-[#6A9ACA] focus:outline-none  bg-gray-50 focus:bg-white"
                name="email"
                id="email"
                placeholder="Enter your email"
              />
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
                type="password"
                className="w-full px-4 py-3  border-2 border-gray-200 rounded-xl focus:border-[#6A9ACA] focus:outline-none  bg-gray-50 focus:bg-white"
                name="password"
                id="password"
                placeholder="Enter your password"
              ></input>
            </div>
            {/* <p className="text-center mt-4">or</p> */}
            {/* <div className="flex text-black justify-center gap-4 mt-4">
              <div className="h-10 w-10 rounded-full border flex justify-center items-center">
                <ImFacebook className="text-xl" />
              </div>
              <div className="h-10 w-10 rounded-full border flex justify-center items-center">
                <FaGoogle />
              </div>
              <div className="h-10 w-10 rounded-full border flex justify-center items-center">
                <FaTwitter />
              </div>
            </div> */}
            <button
              type="submit"
              className="w-full bg-[#0D2841]  text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-200 mt-4"
            >
              Login
            </button>
            <div className="text-center">
              <p>Dont have an account?</p>
              <p>sign up</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
