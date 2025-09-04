const Card = ({ title, location, description, images, travelDate, text }) => {
  return (
    <div className=" p-4 rounded shadow-2xl w-[100%] max-w-[700px]">
      <div className="relative h-60 mb-4">
        <img
          className="absolute w-full  h-full object-cover rounded"
          src=""
          alt="image"
        >
          <ul>
            {images.map((images) => (
              <li key={images.id}></li>
            ))}
          </ul>
        </img>
      </div>
      <div>
        <div className="flex justify-between">
          <h1 className="font-semibold pb-2">{title}</h1>
          <h1 className="font-semibold pb-2">{location}</h1>
        </div>
        <p className="font-thin pb-2">{description}</p>
        <p className="font-thin pb-2">{travelDate}</p>

        <button className="px-2 py-2 bg-blue-500 text-white shadow-md">
          {text}
        </button>
      </div>
    </div>
  );
};

export default Card;
