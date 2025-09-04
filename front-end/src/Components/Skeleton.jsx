import React from "react";
import { FaImage } from "react-icons/fa6";

const Skeleton = () => {
  return (
    <div className=" p-4 rounded  w-[100%] max-w-[500px]">
      <div className="relative h-60 mb-4 flex justify-center items-center bg-gray-300 animate-pulse rounded">
        <FaImage size={28} className="text-gray-100" />
      </div>
      <div className="flex justify-between">
        <div className="h-4 bg-gray-300 rounded-full mb-4"></div>
        <div className="h-4 bg-gray-300 rounded-full mb-4"></div>
      </div>
      <div className="h-4 bg-gray-300 rounded-full mb-4"></div>
      <div className="h-4 bg-gray-300 rounded-full mb-4"></div>
      <div className="h-4 bg-gray-300 rounded-full mb-4"></div>
      <div className="flex justify-between">
        <div className="h-4 bg-gray-300 rounded-full mb-4"></div>
        <button className="w-24 h-10 bg-gray-300 shadow-md animate-pulse"></button>
      </div>
    </div>
  );
};

export default Skeleton;
