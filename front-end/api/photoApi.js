import Cookie from "js-cookie";
import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:4002/api",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

//uploadphoto
