const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.API_key,
  api_secret: process.env.API_secret,
});
