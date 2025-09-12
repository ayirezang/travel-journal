import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-gray-200 sticky top-0">
      <div className="h-16 flex justify-between p-4">
        {/** home */}
        <div className="text-2xl  font-bold px-4">TravelJOURNAL</div>
        {/*buttons * on desktop*/}
        <div className="hidden  sm:block">
          <a href="" className=" text-lg px-4">
            Home
          </a>
          <a href="" className=" text-lg px-4">
            Upload
          </a>
          <a href="" className=" text-lg px-4">
            gallery
          </a>
        </div>
        <div>
          <a href="" className=" text-lg px-4">
            Display
          </a>
          <a href="" className=" text-lg px-4">
            Login
          </a>
          <a href="" className=" text-lg px-4">
            logout
          </a>
        </div>
        {/*hamburger*/}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className=" block sm:hidden px-4 text-3xl text-white"
        >
          <CiMenuBurger />
        </button>
        {/*button mobile * */}
        <div
          className={`${isOpen ? "block" : "hidden"} sm:hidden space-y-2 pb-3`}
        >
          <a href="" className="text-gray-600 text-lg px-4 block">
            Home
          </a>
          <a href="" className="text-gray-600 text-lg px-4 block">
            Login
          </a>
          <a href="" className="text-gray-600 text-lg px-4 block">
            logout
          </a>
          <a href="" className="text-gray-600 text-lg px-4 block">
            Upload
          </a>
          <a href="" className="text-gray-600 text-lg px-4 block">
            gallery
          </a>
          <a href="" className="text-gray-600 text-lg px-4 block">
            Display
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
