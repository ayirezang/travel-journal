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
        setTravel(data);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
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
        <main className="flex flex-col items-center justify-center">
          <h1>YOU</h1>
          <div className=" ">
            {loading ? (
              Skeletons.map((skeleton, index) => (
                <div key={index}>
                  <Skeleton />
                </div>
              ))
            ) : travel ? (
              <div>
                <div>
                  <h1>{travel.title}</h1>
                  <p>{travel.location}</p>
                  <p>{travel.description}</p>
                  <p>{travel.travelDate}</p>
                </div>

                <div className=" grid grid-cols-1   md:grid-cols-2 gap-4">
                  {travel.images &&
                    travel.images.map((image, index) => (
                      <img key={index} src={image.url} />
                    ))}
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
