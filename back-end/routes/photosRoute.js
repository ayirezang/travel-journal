const express = require("express");
const multer = require("multer");
const cloudinary = require("../config/cloudinary");
const Authorization = require("../controllers/Auth");
const { uploadPhotos } = require("../controllers/photosController");
const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

//routes for image upload
router.post("/upload", Authorization, upload.array("upload", 5), uploadPhotos);

module.exports = router;
