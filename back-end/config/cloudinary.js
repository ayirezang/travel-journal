const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.cloud_name,
  API_key: process.env.API_key,
  API_secret: process.env.API_secret,
});
