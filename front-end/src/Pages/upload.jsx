import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { createTravelJournal } from "../../api/api";

const Upload = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [progress, setProgress] = useState();

  const onSubmit = async (data) => {
    try {
      const dataForApi = { ...data };
      if (data.upload) {
        dataForApi.upload = Array.from(data.upload);

        // axios.post("upload", data, {
        //   onUploadProgress: (progressEvent) => {
        //     const { loaded, total } = progressEvent;
        //     let percentage = Math.floor((loaded * 100) / total);
        //   },
        // });
      } else {
        dataForApi.upload = [];
      }
      await createTravelJournal(dataForApi);
      alert("created successfully");
    } catch (error) {
      console.error("full error:", error.response?.data);
      alert(
        "creation  failed:" + (error.response?.data.message || error.message)
      );
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label>Tile</label>
            <input
              {...register("title", { required: true })}
              type="text"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#6A9ACA] focus:outline-none  bg-gray-50 focus:bg-white"
              name="title"
              id="title"
              placeholder="name of your trip"
            ></input>

            {errors.title && (
              <p className="text-red-500 text-sm mt-1">Title is required</p>
            )}
          </div>
          <div>
            <label>Location</label>
            <input
              {...register("location", { required: true })}
              type="text"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#6A9ACA] focus:outline-none  bg-gray-50 focus:bg-white"
              name="location"
              id="location"
              placeholder="Enter the location"
            ></input>

            {errors.location && (
              <p className="text-red-500 text-sm mt-1">Location is required</p>
            )}
          </div>
          <div>
            <label> Travel date</label>
            <input
              {...register("date", { required: true })}
              type="date"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#6A9ACA] focus:outline-none  bg-gray-50 focus:bg-white"
              name="date"
              id="date"
              placeholder="Enter your travel date"
            ></input>

            {errors.date && (
              <p className="text-red-500 text-sm mt-1">Date is required</p>
            )}
          </div>
          <div>
            <label>Description</label>
            <textarea
              {...register("description", { required: true })}
              className=" w-full px-4 py-3 rounded-xl border-2  bg-gray-50 border-gray-200 focus:border-[#6A9ACA]"
              placeholder="Description"
            ></textarea>

            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                description is required
              </p>
            )}
          </div>
          <div>
            <label>Upload a file (Max 4 pictures)</label>
            <input
              {...register("upload", {
                validate: (files) => {
                  if (!files || files.length === 0) {
                    return true;
                  }
                  if (files.length > 4) {
                    return "max 4 files allowed";
                  }
                  return true;
                },
              })}
              className="w-full px-4 py-3 border-2 rounded-xl bg-gray-50 border-gray-200 focus:outline-none focus:border-[#6A9ACA]"
              type="file"
              name="upload"
              multiple
            ></input>
            {errors.upload && (
              <p className="text-red-500 text-sm mt-1">
                {errors.upload.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-[#0D2841]  text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-200 mt-4"
          >
            Submit
          </button>
          <progress
            className="progress progress-primary w-56"
            value="100"
            max="100"
          ></progress>
        </form>
      </div>
    </div>
  );
};

export default Upload;
