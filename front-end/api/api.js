import Cookie from "js-cookie";
import axios from "axios";

//set baseUrl for axios

const api = axios.create({
  baseURL: "http://127.0.0.1:4002/api",
  // headers: {
  //   "Content-Type": "application/json",
  // },
});
//signup
export const signUpApi = async (data) => {
  try {
    const response = await api.post("/signup", data);

    Cookie.set("token", response.data.token, { expires: 5 });
    return response.data;
  } catch (error) {
    console.error("sign up error:", error);
    console.error("error response:", error.response);
    throw new Error(error.response?.data?.message || "sign up failed");
  }
};
// signinApi
export const signInApi = async (data) => {
  try {
    const response = await api.post("/signin", data);
    Cookie.set("token", response.data.token, { expires: 5 });
    return response.data;
  } catch (error) {
    console.error("sign in error:", error);
    console.error("error response:", error.response);
    throw new Error(error.response?.data?.message || "sign in failed");
  }
};

export const signOutApi = async (data) => {
  try {
    const response = await api.post("/signout", data);
    Cookie.set("token", response.data.token, { expires: 5 });
    return response.data;
  } catch (error) {
    console.error("sign out error:", error);
    console.error("error response:", error.response);
    throw new Error(error.response?.data?.message || "sign out failed");
  }
};

export const createTravelJournal = async (data, config = {}) => {
  try {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("location", data.location);
    formData.append("date", data.date);
    formData.append("description", data.description);

    if (data.upload && data.upload.length > 0) {
      for (let i = 0; i < data.upload.length; i++) {
        formData.append("upload", data.upload[i]);
      }
    }
    const response = await api.post("/travel", formData, config);
    return response.data;
  } catch (error) {
    console.error("creating error", error);
    console.error("creating response", error.message);
    console.error("error Data", error.response?.data);
    throw new Error(
      error.response?.data?.message || "creating travel memory failed"
    );
  }
};
export const retrieveAllTravels = async (data) => {
  try {
    const response = await api.get("/travel", data);
    return response.data;
  } catch (error) {
    console.error("creating error", error);
    console.error("creating response", error.message);
    console.error("error Data", error.response?.data);
    throw new Error(error.response?.data.message || "error retriving data");
  }
};

export const getTravelJournalById = async (id) => {
  try {
    const response = await api.get(`/travel/${id}`);
    return response.data;
  } catch (error) {
    console.error("getting by id error,", error);
    console.error("retrieving error", error.message);
    console.error("error Data", error.response?.data);
    throw new Error(error.response?.data.message || "error retriving data");
  }
};

export const updateTravel = async (id, data) => {
  try {
    const response = await api.put(`/travel/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("updating error", error);
    console.error("updating error", error.message);
    console.error("updating Data", error.response?.data);
    throw new Error(error.response?.data.message || "update error");
  }
};

export const deleteTravel = async (id) => {
  try {
    const response = await api.delete(`/travel/${id}`);
    return response.data;
  } catch (error) {
    console.error("delete error", error);
    console.error("deleting error", error.message);
    console.error("deleting Data", error.response?.data);
    throw new Error(error.response?.data.message || "update error");
  }
};
//photo api
