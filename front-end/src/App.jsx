import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Create from "./Pages/Create";
import Display from "./Pages/Display";
import Gallery from "./Pages/Gallery";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<Create />} />
        <Route path="/display" element={<Display />} />

        <Route path="/gallery/:id" element={<Gallery />} />
      </Routes>
    </div>
  );
};

export default App;
