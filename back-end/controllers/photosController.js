const photosModel = require("../models/photosModel");

const uploadPhotos = async (req, res, next) => {
  if (!req.buffer || req.files.length === 0) {
    return res.status(400).send("no photos uploaded");
  }
  try {
    const uploadPromises = req.files.map((file) =>
      cloudinary.uploader.upload(file.buffer)
    );
    const results = await Promise.all(uploadPromises);
    req.files.forEach((file) => {});
    const secureUrls = results.map((result) => result.secure_url);
    const savedSecureUrls = await secureUrls.save();
    res.json({ message: "files uploaded successfully", data: savedSecureUrls });
  } catch (error) {
    console.log("cloudinary upload error:", error);
    res.status(500).send("error uploading files");
  }
};

module.exports = { uploadPhotos };

// , function (req, res, next) {
//   if (!req.files) {
//     return res.status(400).json({ error: "no file uploaded" });
//   }
//   cloudinary.uploader
//     .upload_stream({ resource_type: "auto" }, (error, result) => {
//       if (error) {
//         console.log(error);
//         return res.status(500).json({ error: "error uploading to cloudinary" });
//       }
//       res.json({ public_id: result.public_id, url: result.secure_url });
//     })
//     .end(req.files[0].buffer);
// });
