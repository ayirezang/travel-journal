import React from "react";

import { BsArrowRight } from "react-icons/bs";

import { FaRegSquarePlus } from "react-icons/fa6";
import { FiHome } from "react-icons/fi";
import { GoSignIn } from "react-icons/go";
import { GoSignOut } from "react-icons/go";
import Card from "../Components/Card";

const Display = () => {
  return (
    <div className="">
      <div className="grid grid-cols-12 min-h-screen">
        <div className="col-span-1 bg-green-700">
          <aside className="flex flex-col items-center gap-6 py-4">
            <FiHome size={28} className="mt-13" />
            <FaRegSquarePlus size={28} />
            <GoSignIn size={28} />
            <GoSignOut size={28} />
          </aside>
        </div>

        <div className="col-span-11">
          <nav className="bg-white flex items-center p-5 mt-5">
            <div className="relative w-full">
              <input
                className="px-4 py-4 rounded-full w-full pr-14 bg-gray-100 focus:outline-none"
                placeholder="search..."
              />
              <button className="absolute inset-y-0 right-2 flex items-center justify-center  bg-blue-600 rounded-full w-10 h-10 mt-2">
                <BsArrowRight size={28} className="text-white" />
              </button>
            </div>
          </nav>
          {/* main content*/}
          <div className="p-5">
            <main>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <Card />
                <Card />
                <Card />
              </div>
              <div className="grid grid-cols-3 gap-4 ">
                <Card />
                <Card />
                <Card />
              </div>
            </main>
          </div>
        </div>
        <hr className="bg-black"></hr>
      </div>
    </div>
  );
};

export default Display;
