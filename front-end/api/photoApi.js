import Cookie from "js-cookie";
import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:4002/api/upload",
  // headers: {
  //   "Content-Type": "multipart/form-data",
  // },
});

//uploadphoto

export const uploadPhotos = async (files, memoryId) => {
  try {
    const formData = new FormData();
    formData.append("memoryId", memoryId);
    for (let i = 0; i < files.length; i++) {
      formData.append("upload", files[i]);
    }

    const response = await api.post("", formData);
    return response.data;
  } catch (error) {
    console.error("uploading error", error);
    console.error("error response:", error.message);
    throw new Error(error.response?.data?.message || "upload failed");
  }
};

export const getPhotosBymemoryId = async (memoryId) => {
  try {
    const response = await api.get(`/${memoryId}`);
    return response.data;
  } catch (error) {
    console.error("uploading error", error);
    console.error("error response:", error.message);
    throw new Error(error.response?.data?.message || "retriving  failed");
  }
};

export const deletePhotos = async (memoryId) => {
  try {
    const response = await api.delete(`/${memoryId}`);
    return response.data;
  } catch (error) {
    console.error("deleting error", error);
    console.error("error response:", error.message);
    throw new Error(error.response?.data?.message || "deleting   failed");
  }
};
