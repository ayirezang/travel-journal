import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../Components/NavBar";
import { getTravelJournalById } from "../../api/api";
import Skeleton from "../Components/Skeleton";
import { FaArrowLeft } from "react-icons/fa";

const Gallery = () => {
  const [loading, setLoading] = useState(true);
  const [travel, setTravel] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const displayPhotos = async () => {
      try {
        setLoading(true);
        const data = await getTravelJournalById(id);
        setTravel(data.data);
        setLoading(false);
        console.log("Gallery: API returned:", data);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
        console.error("Gallery API Error:", error);
      }
    };
    displayPhotos();
  }, [id]);

  //handleclick
  const handleclick = () => {
    navigate("/display");
  };

  //dateformate
  const formateDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const Skeletons = [1, 2, 3, 4];
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 ">
        {/* <div className="">
          <NavBar />
        </div> */}
        <div className="p-5">
          <button
            onClick={handleclick}
            className="hover:bg-gray-200 cursor-pointer px-3 py-3 flex items-center shadow-lg rounded-lg mt-5"
          >
            <FaArrowLeft size={14} className="" />
          </button>
        </div>
        <main className="max-w-6xl mx-auto p-5">
          <div className="">
            {loading ? (
              Skeletons.map((skeleton, index) => (
                <div key={index}>
                  <Skeleton />
                </div>
              ))
            ) : travel ? (
              <div className="p-5">
                <div>
                  <h1 className="text-3xl mb-3">{travel.title}</h1>
                  <div
                    className={`grid gap-2 ${
                      travel.images.length == 1
                        ? "grid grid-rows-1"
                        : travel.images.length == 2
                        ? "grid-cols-1 md:grid-cols-2"
                        : travel.images.length == 3
                        ? "grid-cols-2 md:grid-cols-4 grid-rows-2"
                        : "grid-col-1 md:grid-cols-2"
                    }`}
                  >
                    {travel.images.map((image, index) => (
                      <img
                        key={index}
                        src={image.url}
                        className={`w-full h-80 object-cover rounded-lg ${
                          travel.images.length == 3 && index == 0
                            ? "col-span-2 md:col-span-2 row-span-2"
                            : travel.images.length == 3
                            ? "col-span-1 row-span-1"
                            : "col-span-1"
                        }`}
                      ></img>
                    ))}
                  </div>
                  {/* <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-row-2 ">
                    {travel.images &&
                      travel.images.map((image, index) => (
                        <img
                          key={index}
                          src={image.url}
                          className={`w-full h-80 object-none rounded-lg ${
                            travel.images.length === 3 && index === 0
                              ? "md:col-span-2 "
                              : "col-span-1"
                          }`}
                        />
                      ))}
                  </div> */}
                </div>
                <div className="mt-4 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between  sm:items-center gap-2">
                    <p className="text-2xl font-semibold">{travel.location}</p>
                    <p className="text-2xl font-semibold">
                      {formateDate(travel.travelDate)}
                    </p>
                  </div>
                  <div className="max-w-xl">
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {travel.description}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <p>no travel found</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Gallery;
