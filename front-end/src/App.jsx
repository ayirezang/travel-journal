import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Upload from "./Pages/Upload";
import Display from "./Pages/Display";
import Gallery from "./Pages/Gallery";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/display" element={<Display />} />

        <Route path="/gallery/:id" element={<Gallery />} />
      </Routes>
    </div>
  );
};

export default App;

// import React from "react";

// const gallery = () => {

//   return (
//     <div className="grid grid-cols-12">
//       gallery
//       <div className="row-span-1">
//         <nav></nav>
//       </div>
//       <main>
//         <h1></h1>
//         <div className="grid grid-cols-1  md:grid-cols-2 gap-4">
//           <div>1</div>
//           <div>2</div>
//           <div>3</div>
//           <div>4</div>
//         </div>
//         <div>
//           <p>location</p>
//           <p>date</p>
//           <p>description</p>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default gallery;
