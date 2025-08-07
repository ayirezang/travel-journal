import Cookie from "js-cookie";
import axios from "axios";

//set baseUrl for axios

const api = axios.create({
  baseURL: "http://127.0.0.1:4002/api",
  headers: {
    "Content-Type": "application/json",
  },
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

const createTravelJournal = () => {};
