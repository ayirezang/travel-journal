import React, { useEffect, useState } from "react";

import { BsArrowRight } from "react-icons/bs";

import { FaRegSquarePlus } from "react-icons/fa6";
import { FiHome } from "react-icons/fi";
import { GoSignIn } from "react-icons/go";
import { GoSignOut } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import Card from "../Components/Card";
import Skeleton from "../Components/Skeleton";
import { deleteTravel, retrieveAllTravels } from "/api/api";
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
      <div className="grid grid-cols-12 min-h-screen pt-6 py-12 ">
        <div className="col-span-12">
          <NavBar className="" />

          {/* main content*/}
          <div className="p-5 md:p-10 lg:pb-12">
            <main>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8 lg:gap-8 mb-6 md:mb-8 lg:mb-10">
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
                              label: "View more",
                              color: "bg-blue-500",
                              onClick: () => navigate(`/gallery/${travel._id}`),
                            },
                            {
                              label: "Delete",
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
