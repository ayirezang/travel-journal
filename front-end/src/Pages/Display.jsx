import React, { useEffect, useState } from "react";

import { BsArrowRight } from "react-icons/bs";

import { FaRegSquarePlus } from "react-icons/fa6";
import { FiHome } from "react-icons/fi";
import { GoSignIn } from "react-icons/go";
import { GoSignOut } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import Card from "../Components/Card";
import Skeleton from "../Components/Skeleton";
import { deleteTravel, retrieveAllTravels } from "../../api/api";
import NavBar from "../Components/NavBar";

const Display = () => {
  const [loading, setLoading] = useState(true);
  const [travels, setTravels] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTravels = async () => {
      try {
        setLoading(true);
        const data = await retrieveAllTravels();
        console.log("API returned:", data);
        setTravels(data);
        setLoading(false);
        console.log(fetchTravels);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };
    fetchTravels();
  }, []);
  const Skeletons = [1, 2, 3, 4, 5, 6];

  //delete
  const deleteTravels = async (id) => {
    try {
      const data = await deleteTravel(id);
      setTravels(travels.filter((travel) => travel._id !== id));
    } catch (error) {
      console.error("error:", error);
    }
  };
  return (
    <div className="">
      <div className="grid grid-cols-12 min-h-screen">
        {/* <div className="col-span-1 border-r border-gray-300">
          <aside className="flex flex-col items-center gap-16 py-4">
            <FiHome size={28} className="mt-10" />
            <FaRegSquarePlus size={28} />
            <GoSignIn size={28} />
            <GoSignOut size={28} />
          </aside>
        </div> */}

        <div className="col-span-12 ">
          <NavBar className="" />
          {/* <nav className="bg-white flex items-center p-5 mt-5">
            <div className="relative w-full">
              <input
                className="px-4 py-4 rounded-full w-full pr-14 bg-gray-100 focus:outline-none"
                placeholder="search..."
              />
              <button className="absolute inset-y-0 right-2 flex items-center justify-center  bg-blue-600 rounded-full w-10 h-10 mt-2">
                <BsArrowRight size={28} className="text-white" />
              </button>
            </div>
          </nav> */}
          {/* main content*/}
          <div className="p-5">
            <main>
              <div className="grid grid-cols-3 gap-6 mb-6">
                {loading
                  ? Skeletons.map((skeleton, index) => (
                      <div key={index}>
                        <Skeleton />
                      </div>
                    ))
                  : travels.map((travel, index) => (
                      <div key={index}>
                        <Card
                          title={travel.title}
                          location={travel.location}
                          description={travel.description}
                          images={travel.images}
                          buttons={[
                            {
                              label: "view more",
                              color: "bg-blue-500",
                              onClick: () => navigate(`/gallery/${travel._id}`),
                            },
                            {
                              label: "delete",
                              color: "bg-green-500",
                              onClick: () => deleteTravels(travel._id),
                            },
                          ]}
                        />
                      </div>
                    ))}
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
