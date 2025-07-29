const express = require("express");
const multer = require("multer");
const cloudinary = require("../config/cloudinary");
const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

//routes for image upload
router.post("/upload", upload.array("upload", 5));

module.exports = router;

