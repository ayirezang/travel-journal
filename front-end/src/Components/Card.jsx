import React from "react";

const Card = ({ props }) => {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src={
              props.image ||
              "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            }
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{props.title || "Card Title"}</h2>
          <p>
            {props.description ||
              "A card component has a figure, a body part, and inside body there  are title and actions parts"}
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              {props.text || "Buy Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
