const express = require("express");

const { mongoose } = require("mongoose");
const travelRoute = require("./routes/travelJournalRoute");
require("dotenv").config();

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
