import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { createTravelJournal } from "../../api/api";
import NavBar from "../Components/NavBar";

const Upload = () => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const dataForApi = { ...data };
      if (data.upload) {
        dataForApi.upload = Array.from(data.upload);
      } else {
        dataForApi.upload = [];
      }
      const config = {
        onUploadProgress: function (progressEvent) {
          const percentCompleted = Math.round(
            (progressEvent.loaded / progressEvent.total) * 100
          );
          setProgress(percentCompleted);
        },
      };
      await createTravelJournal(dataForApi, config);

      alert("created successfully");
      navigate("/display");
    } catch (error) {
      console.error("full error:", error.response?.data);
      alert(
        "creation  failed:" + (error.response?.data.message || error.message)
      );

      console.log(error);
    }
  };

  return (
    <div className=" min-h-screen ">
      <div>
        <NavBar />
      </div>
      <div className="flex flex-col justify-center items-center  p-4 mt-10">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label>Title</label>
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
              {...register("travelDate", { required: true })}
              type="date"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#6A9ACA] focus:outline-none  bg-gray-50 focus:bg-white"
              name="travelDate"
              id="travelDate"
              placeholder="Enter your travel date"
            ></input>

            {errors.travelDate && (
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
          <div className="">
            <label>(Max 4 pictures)</label>

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
            {/* <button className="bg-[#0D2841]  text-white font-semibold py-3 px-3 rounded-xl">
                upload files
              </button> */}
          </div>

          <progress
            className="progress progress-primary w-56"
            value={progress}
            max="100"
          ></progress>
          <button
            type="submit"
            className="w-full bg-[#0D2841]  text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-200 mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Upload;
