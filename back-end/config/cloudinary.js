const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.API_key,
  api_secret: process.env.API_secret,
});

// const uploads = (file) => {
//   return new Promise((resolve, reject) => {
//     cloudinary.uploader.upload(file.path, (error, result) => {
//       if (error) reject(error);
//       else resolve(result);
//     });
//   });
// };
// module.exports = { uploads };
module.exports = cloudinary;
