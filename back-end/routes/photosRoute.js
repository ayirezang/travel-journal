const express = require("express");
const multer = require("multer");
const cloudinary = require("../config/cloudinary");
const Authorization = require("../controllers/Auth");
const { uploadPhotos } = require("../controllers/photosController");
const router = express.Router();
const path = require("path");

// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage })
// ;
//config multer
const photoStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, file.filename + "-" + uniqueSuffix);
  },
});
const upload = multer({ storage: photoStorage });

//routes for image upload
router.post("/upload", Authorization, upload.array("upload", 5), uploadPhotos);

module.exports = router;
