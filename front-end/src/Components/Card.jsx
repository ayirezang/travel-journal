import React from "react";
import CarousselDefault from "./CarousselDefault";
import TextReduction from "./TextReduction";

const Card = ({
  title,
  location,
  description,
  images,
  travelDate,
  buttons = [
    { label: "Diew more", color: "bg-blue-400", onClick: () => {} },
    { label: "Delete", color: "bg-green-400", onClick: () => {} },
  ],
}) => {
  return (
    <div className=" bg-white p-6 rounded-xl shadow-lg  w-[100%] max-w-[700px]">
      <div className="relative h-60 mb-4 ">
        <div className="absolute w-full  h-full object-cover object-top rounded">
          {images && images.length > 0 && (
            <img
              src={images[0].url}
              className="w-full h-full object-cover object-top rounded"
            />
          )}
        </div>
        {/* <ul>
          {images.map((images) => (
            <li key={images.id}></li>
          ))}
        </ul> */}
      </div>
      <div>
        <div className="flex justify-between">
          <h1 className="font-semibold pb-2">{title}</h1>
          <h1 className="font-semibold pb-2">{location}</h1>
        </div>
        <TextReduction
          text={description}
          maxLength={80}
          // style={{
          //   color: "#6b7280",
          //   lineHeight: "1.625",
          // }}
          className="text-gray-600 leading-relaxed"
        />
        {/* <p className="font-thin pb-2">{description}</p> */}
        <p className="font-thin pb-2">{travelDate}</p>
        <div className="flex justify-between">
          {/* <button className="px-2 py-2 bg-blue-500 text-white shadow-md"> */}
          {buttons.map((button, index) => (
            <button
              key={index}
              className={`px-2 py-2  text-white shadow-md ${button.color}`}
              onClick={() => button.onClick()}
            >
              {button.label}
            </button>
          ))}
          {/* </button> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
