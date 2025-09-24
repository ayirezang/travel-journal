import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-[#1B73F4] min-h-screen">
      {/*header*/}
      <div className="flex justify-between p-5">
        <h1 className="text-white font-bold text-4xl">TravelJOURNAL</h1>
        <Link to="/login">
          <button className="px-4 py-2 bg-white rounded-lg text-blue-600 hover:bg-blue-300">
            Login
          </button>
        </Link>
      </div>
      {/**main */}
      <div className="flex flex-col justify-center items-center">
        {/**text */}
        <div className=" flex flex-col  mt-32 space-y-5 justify-center items-center">
          <div className=" leading-relaxed tracking-wide">
            <h2 className="text-white text-5xl font-bold text-center">
              Ready for your next adventure?
            </h2>
          </div>
          <div className="max-w-96 flex justify-center">
            <p className="text-center text-xl text-blue-100">
              Start your first adventure and capture unforgettable memories
            </p>
          </div>
        </div>

        {/**buttons and cards */}

        <div className="mt-5 flex flex-col justify-center items-center space-y-20">
          {/**buttons */}
          <div className=" flex gap-5 mt-3">
            <button className="px-10 py-3 bg-white text-blue-600 hover:cursor-pointer hover:shadow-xl hover:bg-blue-300  rounded-lg">
              Start exploring
            </button>
          </div>
          {/**cards */}
          <div className="flex space-x-5 ">
            {/**cards1 */}
            <div className="h-40 w-54 p-5 bg-blue-300 rounded-lg shadow-md flex hover:cursor-pointer hover:bg-blue-400 hover:shadow-xl  flex-col items-center  justify-end">
              <p className="text-white ">Write journals</p>
              <p className="mb-4">Document your travel experience</p>
            </div>
            {/**card2 */}
            <div className="h-40 w-54 p-5 bg-blue-300 rounded-lg shadow-md  hover:cursor-pointer hover:bg-blue-400  hover:shadow-xl flex  flex-col items-center justify-end">
              <p className="text-white ">Add Photos</p>
              <p className="mb-4">Upload memories from your trip</p>
            </div>
            {/**card3 */}
            <div className="h-40 w-54 p-5 bg-blue-300 rounded-lg shadow-md  hover:cursor-pointer hover:bg-blue-400 hover:shadow-xl flex  flex-col items-center justify-end">
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
