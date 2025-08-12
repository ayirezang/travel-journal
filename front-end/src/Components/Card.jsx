const Card = () => {
  return (
    <div className=" p-4 rounded shadow-2xl w-[100%] max-w-[700px]">
      <div className="relative h-60 mb-4">
        <img
          className="absolute w-full  h-full object-cover rounded"
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt=""
        ></img>
      </div>
      <div>
        <h1 className="font-semibold pb-2">Sao tome</h1>
        <p className="font-thin pb-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          dignissimos vero nobis, architecto facere aspernatur corrupti saepe
          molestiae iste distinctio tenetur incidunt illum sapiente quaerat
          perferendis corporis aperiam reprehenderit vel?
        </p>
        <button className="px-2 py-2 bg-blue-500 text-white shadow-md">
          read more
        </button>
      </div>
    </div>
  );
};

export default Card;
