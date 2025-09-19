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
    <div className="grid grid-cols-12 min-h-screen">
      <div className="col-span-12 ">
        <div className="">
          <NavBar />
        </div>
        <div className="p-5">
          <button
            onClick={handleclick}
            className="hover:bg-gray-200 cursor-pointer px-5 py-5 flex items-center shadow-lg rounded-lg mt-5"
          >
            <FaArrowLeft size={18} className="" />
          </button>
        </div>
        <main className="max-w-6xl mx-auto px-4 pt-24 pb-12">
          <div className="">
            {loading ? (
              Skeletons.map((skeleton, index) => (
                <div key={index}>
                  <Skeleton />
                </div>
              ))
            ) : travel ? (
              <div className="p-10 ">
                <div>
                  <h1 className="text-4xl ">{travel.title}</h1>
                  <div
                    className={`grid gap-2 ${
                      travel.images.length == 1
                        ? "grid grid-col-1"
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
                        className={`w-full h-96 object-cover rounded-lg ${
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
                <div className="flex justify-between">
                  <p className="text-2xl">{travel.location}</p>
                  <p className="text-2xl">{formateDate(travel.travelDate)}</p>
                </div>
                <p className="text-gray-600">{travel.description}</p>
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
