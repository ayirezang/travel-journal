import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signInApi } from "../../api/api";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await signInApi(data);
      //navigate
      navigate("/");
    } catch (error) {
      alert("sign in failed:" + error.message);
      console.log(error);
    }
  };
  return (
    <div className="bg-[#93ACEA] flex flex-col justify-center items-center min-h-screen">
      <div className="bg-white shadow-lg max-w-md w-full rounded-lg p-10">
        <form onSubmit={handleSubmit(onSubmit)} className="">
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
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "please enter a valid email(e.g,angela@gmail.com)",
                  },
                })}
                type="text"
                className="w-full px-4 py-3 border-2  border-gray-200 rounded-xl focus:border-[#6A9ACA] focus:outline-none  bg-gray-50 focus:bg-white"
                name="email"
                id="email"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 mt-1 text-sm">
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
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#6A9ACA] focus:outline-none  bg-gray-50 focus:bg-white"
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
