import { Carousel } from "@material-tailwind/react";
import { useState } from "react";

export function CarouselDefault({ images }) {
  return (
    <Carousel className="rounded-xl relative h-60 mb-4">
      <div>
        {images.map((image) => {
          return (
            <div>
              <img
                key={image.id}
                className="absolute w-full h-full object-cover rounded"
                src={image.url}
                alt={title}
              />
            </div>
          );
        })}
      </div>
    </Carousel>
  );
}
export default CarouselDefault;
