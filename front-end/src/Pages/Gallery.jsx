import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getTravelJournalById } from "/api/api";
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
      <div className="col-span-12">
        <div className="p-4 md:p-5 lg:p-5">
          <button
            onClick={handleclick}
            className="hover:bg-gray-200 cursor-pointer px-3 py-3 md:px-5 md:py-5 lg:px-7 lg:py-7 flex items-center shadow-md md:shadow-lg rounded-lg mt-5 md:mt-7 lg:mt-8"
          >
            <FaArrowLeft className="w-4 h-4 md:w-5 md:h-5 lg:w-5 lg:h-5" />
          </button>
        </div>
        <main className="max-w-full lg:max-w-6xl md:max-w-4xl mx-auto p-5">
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
                  <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    {travel.images.map((image, index) => (
                      <img
                        key={index}
                        src={image.url}
                        className="w-full h-80 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                </div>

                <div
                  className="mt-4
                space-y-4 "
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                    <p className="md:text-xl lg:text-2xl font-semibold">
                      {travel.location}
                    </p>
                    <p className="text-2xl font-semibold">
                      {formateDate(travel.travelDate)}
                    </p>
                  </div>
                  <div className="max-w-xl">
                    <p className="text-gray-600 text-base  md:text-lg lg:text-lg">
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
