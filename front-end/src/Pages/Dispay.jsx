import React from "react";

import { BsArrowRight } from "react-icons/bs";
import { CiSquarePlus } from "react-icons/ci";
import { FiHome } from "react-icons/fi";

const Dispay = () => {
  return (
    <div className="">
      <div className="grid grid-cols-12 min-h-screen">
        <div className="col-span-1 bg-green-700">
          <aside className="flex flex-col items-center gap-15">
            <FiHome size={28} className="mt-13" />
            <CiSquarePlus size={28} />
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
          <main>
            <h1></h1>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dispay;
