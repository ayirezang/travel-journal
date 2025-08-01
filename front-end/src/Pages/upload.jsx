import React from "react";
import { useForm } from "react-hook-form";

const Upload = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm;
  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label>tile</label>
            <input
              type="text"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#6A9ACA] focus:outline-none  bg-gray-50 focus:bg-white"
              name="title"
              id="title"
              placeholder="name of your trip"
            ></input>
            {...register("title", { required: true })}
            <error>
              {errors.title?.name === "required" && "title is required"}
            </error>
          </div>
          <div>
            <label>Location</label>
            <input
              type="text"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#6A9ACA] focus:outline-none  bg-gray-50 focus:bg-white"
              name="location"
              id="location"
              placeholder="Enter the location"
            ></input>
            {...register("location", { required: true })}
            <error>
              {errors.location?.location === "required" &&
                "location is required"}
            </error>
          </div>
          <div>
            <label> Travel date</label>
            <input
              type="date"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#6A9ACA] focus:outline-none  bg-gray-50 focus:bg-white"
              name="date"
              id="date"
              placeholder="Enter your travel date"
            ></input>
            {...register("title", { required: true })}
            <error>
              {errors.date?.date === "required" && "date is required"}
            </error>
          </div>
          <div>
            <label>Description</label>
            <textarea
              className="textarea textarea-ghost border-2 border-gray-200 focus:border-[#6A9ACA]"
              placeholder="Bio"
            ></textarea>
            {...register("description", { required: true })}
            <error>
              {errors.description?.description === "required" &&
                "description is required"}
            </error>
          </div>
          <div>
            <label>upload a file</label>
            <input type="file" name="upload" multiple></input>
          </div>
          <button
            type="submit"
            className="w-full bg-[#0D2841]  text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-200 mt-4"
          ></button>
          {/* <div>
            <label>Description</label>
            <input></input>
          </div> */}
        </form>
      </div>

      {/* <form action="/upload" method="post" encType="multipart/form-data">
        <label for="file">choose a file:</label>
        <input type="file" name="upload" multiple />
        <button className="bg-pink-500 text-white p-2 rounded-md">
          upload image
        </button>
      </form> */}
    </div>
  );
};

export default Upload;
