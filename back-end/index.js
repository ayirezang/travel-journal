const express = require("express");

require("dotenv").config();

const { mongoose } = require("mongoose");
const travelRoute = require("./routes/travelJournalRoute");
const photosRoute = require("./routes/photosRoute");
const controller = require("./controllers/userControllers");
const userRoute = require("./routes/userRoute");
const cloudinary = require("./config/cloudinary");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const Authorization = require("./controllers/Auth");

const server = express();
server.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3000",
      "https://travel-journal-brown-gamma.vercel.app",
      "https://travel-journal-production.up.railway.app",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
server.use(cookieParser());

//middleware
server.use(express.json());
//routes
server.use("/api", travelRoute);
server.use("/api", photosRoute);
server.use("/api", userRoute);

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => console.log("Connected to mongo"));
const PORT = process.env.PORT || 4002;
server.listen(PORT, () => console.log(`server is on port ${PORT}`));
