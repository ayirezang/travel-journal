import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-[#1B73F4] min-h-screen pt-5 ">
      {/*header*/}
      <div className=" flex justify-between p-5 md:p-6 lg-p-7 ">
        <h1 className="text-white font-bold text-2xl  md:text-3xl lg:text-4xl">
          TravelJOURNAL
        </h1>
        <Link to="/login">
          <button className="px-2 py-2 lg:px-4 lg:py-2 md:px-3 md:py-2 bg-white rounded-lg text-blue-600 hover:bg-blue-300">
            Login
          </button>
        </Link>
      </div>
      {/**main */}
      <div className="flex flex-col justify-center items-center ">
        {/**text */}
        <div className="flex flex-col lg:mt-32 md:mt-28 space-y-2 md:space-x-3 lg:space-y-5 justify-center items-center">
          <div className=" leading-relaxed tracking-wide">
            <h2 className="text-white text-3xl  md:text-4xl lg:text-5xl font-bold text-center">
              Ready for your next adventure?
            </h2>
          </div>
          <div className="w-full max-w-64  md:max-w-80   lg:max-w-96 flex justify-center">
            <p className="text-center text-base md:text-lg lg:text-xl text-blue-100">
              Start your first adventure and capture unforgettable memories
            </p>
          </div>
        </div>

        {/**buttons and cards */}

        <div className="mt-2 md:mt-3 lg:mt-5  flex flex-col gap-5 md:gap-9 lg:gap-10 justify-center items-center  ">
          {/**buttons */}
          <div className="flex gap-2 md:gap-3 lg:gap-5 mt-2 lg:mt-3">
            <button className="px-5 py-2 md:px-7 md:py-2 lg:px-10 lg:py-3 bg-white text-blue-600 hover:cursor-pointer hover:shadow-xl hover:bg-blue-300 rounded-lg  md:rounded-lg lg:rounded-xl">
              Start exploring
            </button>
          </div>
          {/**cards */}
          <div className=" flex flex-col space-y-3 p-5 justify-center items-center md:flex-row  md:space-x-4  md:space-y-0 lg:flex-row lg:space-x-5 ">
            {/**cards1 */}
            <div className="h-32 w-full md:h-36 md:w-48 lg:h-32 lg:w-72 p-5 bg-blue-300 rounded-lg shadow-md flex hover:cursor-pointer hover:bg-blue-400 hover:shadow-xl  flex-col items-center  justify-end">
              <p className="text-white ">Write journals</p>
              <p className="mb-4">Document your travel experience</p>
            </div>
            {/**card2 */}
            <div className="h-32 w-full md:h-36 md:w-48 lg:h-32 lg:w-72 p-5 bg-blue-300 rounded-lg shadow-md  hover:cursor-pointer hover:bg-blue-400  hover:shadow-xl flex  flex-col items-center justify-end">
              <p className="text-white text-center">Add Photos</p>
              <p className="mb-4">Upload memories from your trip</p>
            </div>
            {/**card3 */}
            <div className="h-32 w-full md:h-36 md:w-48 lg:h-32 lg:w-72 p-5 bg-blue-300 rounded-lg shadow-md  hover:cursor-pointer hover:bg-blue-400 hover:shadow-xl flex  flex-col items-center justify-end">
              <p className="text-white ">Share Stories</p>
              <p className="mb-4">Document your travel experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
