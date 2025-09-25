import React, { useState } from "react";

import { CiMenuBurger } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-gray-200 fixex top-0">
      <div className="h-16 flex justify-between p-4">
        {/** home */}
        <div className="text-2xl  font-bold px-4">TravelJOURNAL</div>
        {/*buttons * on desktop*/}
        <div className="hidden  sm:block">
          <NavLink to="/" className=" text-lg px-4">
            Home
          </NavLink>
          <NavLink to="/upload" className=" text-lg px-4">
            Upload
          </NavLink>
          <NavLink to="/display" className=" text-lg px-4">
            Display
          </NavLink>
        </div>
        {/* <div className="space-x-2">
          <button
            to="/login"
            className="  px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-800 text-lg "
          >
            Login
          </button>
          <button
            to=""
            className="px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-800 text-lg "
          >
            Logout
          </button>
        </div> */}
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
          <NavLink to="/" className="text-gray-600 text-lg px-4 block">
            Home
          </NavLink>
          <NavLink to="/upload" className="text-gray-600 text-lg px-4 block">
            Upload
          </NavLink>

          <NavLink to="/display" className="text-gray-600 text-lg px-4 block">
            Display
          </NavLink>
          <NavLink to="/login" className="text-gray-600 text-lg px-4 block">
            Login
          </NavLink>
          <NavLink to="/" className="text-gray-600 text-lg px-4 block">
            Sign Out
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
