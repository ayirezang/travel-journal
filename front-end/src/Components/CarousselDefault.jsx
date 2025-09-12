import { Carousel } from "@material-tailwind/react";
import { useState } from "react";

export function CarouselDefault({ images, title }) {
  return (
    <Carousel className="rounded-xl  h-60 mb-4">
      {images.map((image) => {
        return (
          <div>
            <img
              key={image.id}
              className=" w-full h-full object-cover rounded-lg"
              src={image.url}
              alt={title}
            />
          </div>
        );
      })}
    </Carousel>
  );
}
export default CarouselDefault;
