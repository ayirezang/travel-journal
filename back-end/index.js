const express = require("express");

require("dotenv").config();

const { mongoose } = require("mongoose");
const travelRoute = require("./routes/travelJournalRoute");
const cloudinary = require("./config/cloudinary");

const server = express();
//middleware
server.use(express.json());
//routes
server.use(travelRoute);

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => console.log("Connected to mongo"));
const PORT = process.env.PORT || 4002;
server.listen(PORT, () => console.log(`server is on port ${PORT}`));
