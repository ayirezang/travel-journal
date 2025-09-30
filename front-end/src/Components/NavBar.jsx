import React, { useState } from "react";

import { CiMenuBurger } from "react-icons/ci";
import { NavLink, useNavigate } from "react-router-dom";
import { signOutApi } from "../../api/api";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") == "true"
  );
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const data = await signOutApi();
      setIsLoggedIn(false);
      localStorage.removeItem("isLoggedIn");

      navigate("/login");
    } catch (error) {
      console.error("error:", error);
    }
  };

  //login function

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <nav className="bg-gray-200  fixed  top-0 w-full z-50">
      <div className="h-16 flex justify-between   p-4">
        {/** home */}
        <div className="text-2xl  font-bold px-4">TravelJOURNAL</div>
        {/*buttons * on desktop*/}
        <div className="hidden   sm:block">
          <NavLink to="/" className="text-lg px-4">
            Home
          </NavLink>
          <NavLink to="/upload" className="text-lg px-4">
            Upload
          </NavLink>
          <NavLink to="/display" className="text-lg px-4">
            Display
          </NavLink>
        </div>
        <div className="hidden sm:flex space-x-2">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="px-4 py-3 bg-blue-600 rounded-lg text-white hover:bg-blue-800 text-lg flex justify-center items-center"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={handleLogin}
              className="  px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-800 text-lg"
            >
              Login
            </button>
          )}
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
          <NavLink
            onClick={() => setIsOpen(false)}
            to="/"
            className="text-gray-600 text-lg px-4 block"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setIsOpen(false)}
            to="/upload"
            className="text-gray-600 text-lg px-4 block"
          >
            Upload
          </NavLink>

          <NavLink
            onClick={() => setIsOpen(false)}
            to="/display"
            className="text-gray-600 text-lg px-4 block"
          >
            Display
          </NavLink>
          {isLoggedIn ? (
            <button
              onClick={() => {
                setIsOpen(false), handleLogout();
              }}
              className="px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-800 text-lg block"
            >
              Log Out
            </button>
          ) : (
            <button
              onClick={() => {
                setIsOpen(false), handleLogin();
              }}
              className="px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-800 text-lg block"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
