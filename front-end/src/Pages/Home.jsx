

import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-[#93ACEA] min-h-screen p-5  ">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-white px-4">TravelJOURNAL</h1>
        <button className="bg-blue-500 text-white px-10 py-3 font-semibold rounded-xl">
          Login
        </button>
      </div>
      {/**text and button */}
      <div className="flex flex-col justify-center items-center text-center space-y-2 mt-56 p-5">
        <p className="text-4xl max-w-md">
          Your travel journal is empty! start your first adventure
        </p>
        <div className="flex items-center">
          <button className="bg-blue-500 text-white px-8 py-3 rounded-xl">
            <Link to="/display"> Start Exploring</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
