import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../Components/NavBar";
import { getTravelJournalById } from "../../api/api";
import Skeleton from "../Components/Skeleton";

const Gallery = () => {
  const [loading, setLoading] = useState(true);
  const [travel, setTravel] = useState(null);
  const { id } = useParams();

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
  const Skeletons = [1, 2, 3, 4];
  return (
    <div className="grid grid-cols-12 min-h-screen">
      <div className="col-span-12 ">
        <div className="">
          <NavBar />
        </div>
        <main className="max-w-6xl mx-auto px-4 pt-24 pb-12">
          <div className="mt-10 p-5">
            {loading ? (
              Skeletons.map((skeleton, index) => (
                <div key={index}>
                  <Skeleton />
                </div>
              ))
            ) : travel ? (
              <div className="p-5">
                <div>
                  <h1 className="text-4xl">{travel.title}</h1>
                  <div className="grid gap-2 sm:grid-cols-1 md:grid-cols lg:grid-cols-2 grid-row-2 ">
                    {travel.images &&
                      travel.images.map((image, index) => (
                        <img
                          key={index}
                          src={image.url}
                          className={`w-full h-full object-cover rounded-lg ${
                            travel.images.length === 3 && index === 0
                              ? "md:col-span-2 md:row-span-2"
                              : "col-span-1 row-span-1"
                          }`}
                        />
                      ))}
                  </div>
                </div>
                <div className="flex justify-between">
                  <p className="text-2xl">{travel.location}</p>
                  <p className="text-2xl">{travel.travelDate}</p>
                </div>
                <p>{travel.description}</p>
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
