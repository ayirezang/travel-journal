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
