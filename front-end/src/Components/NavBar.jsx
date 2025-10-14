import React from "react";
import { useState } from "react";

import { CiMenuBurger } from "react-icons/ci";
import { NavLink, useNavigate } from "react-router-dom";
import { signOutApi } from "/api/api";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
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
    <nav className="bg-gray-200   fixed  top-0 w-full z-50 ">
      <div className=" flex flex-col">
        {/**desktop */}
        <div className="flex justify-between h-16 items-center p-4">
          {/**AS LOGO */}
          <div className="text-2xl  font-bold px-4">TravelJOURNAL</div>
          {/**BUTTOns on desktop */}
          <div className="hidden sm:flex items-center space-x-2 ">
            <NavLink to="/" className="text-lg px-4">
              Home
            </NavLink>
            <NavLink to="/create" className="text-lg px-4">
              Add Trip
            </NavLink>
            <NavLink to="/display" className="text-lg px-4">
              My Trips
            </NavLink>

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
          {/**harmburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="block sm:hidden px-4 text-3xl "
          >
            <CiMenuBurger />
          </button>
        </div>
        {/**mobile */}
        {isOpen && (
          <div className="sm:hidden bg-gray-200 border-t border-gray-300  pb-3 block">
            <NavLink
              onClick={() => setIsOpen(false)}
              to="/"
              className="text-gray-600 text-lg px-8 py-2"
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setIsOpen(false)}
              to="/create"
              className="text-gray-600 text-lg px-8 py-2 block"
            >
              Create
            </NavLink>
            <NavLink
              onClick={() => setIsOpen(false)}
              to="/display"
              className="text-gray-600 block px-8 py-2"
            >
              Display
            </NavLink>
            <div className="px-7 mt-2">
              {isLoggedIn ? (
                <button
                  onClick={() => {
                    setIsOpen(false), handleLogout();
                  }}
                  className="px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-800 text-lg flex justify-center items-center"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => {
                    setIsOpen(false), handleLogin();
                  }}
                  className="px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-800 text-lg"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
