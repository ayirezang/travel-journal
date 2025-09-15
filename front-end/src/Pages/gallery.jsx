import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../Components/NavBar";
import { getTravelJournalById } from "../../api/api";

const Gallery = () => {
  const [loading, setLoading] = useState();
  const [travels, setTravels] = useState();
  const { id } = useParams();

  useEffect(() => {
    const displayPhotos = async () => {
      try {
        const data = await getTravelJournalById(id);
        setTravels(data);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };
    displayPhotos();
  });
  return (
    <div className="grid grid-cols-12 min-h-screen">
      <div className="col-span-12 ">
        <div className="">
          <NavBar />
        </div>
        <main className="flex flex-col items-center justify-center">
          <h1></h1>
          <div className="grid grid-cols-1   md:grid-cols-2 gap-4 ">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>
          <div>
            <p>location</p>
            <p>date</p>
            <p>description</p>
          </div>
        </main>
        <h1>{id}</h1>
      </div>
    </div>
  );
};

export default Gallery;
