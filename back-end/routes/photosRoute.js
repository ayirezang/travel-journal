const express = require("express");
const multer = require("multer");
const cloudinary = require("../config/cloudinary");
const Authorization = require("../controllers/Auth");
const {
  createPhotos,
  getPhotoById,
  getAllPhotos,
  updatePhoto,
  deletePhotos,
} = require("../controllers/photosController");
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
    const baseName = path.basename(file.originalname, ext);
    cb(null, baseName + "-" + uniqueSuffix + ext);
  },
});
const upload = multer({ storage: photoStorage });

//routes for image upload
router.post(
  "/upload",

  upload.array("upload", 5),
  createPhotos
);
router.get("/upload/:memoryId", getAllPhotos);
router.get("/upload/photo/:id", getPhotoById);
router.put("/upload/photo/:id", updatePhoto);
router.delete("/upload/:id", deletePhotos);

module.exports = router;
