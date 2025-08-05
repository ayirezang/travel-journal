import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <p>your travel journal is empty! start your first adventure</p>
      <div>
        <button className="bg-blue-500 text-white p-4 rounded-xl">
          <Link to="/upload"> create your first entry!</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
