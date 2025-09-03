const express = require("express");
const multer = require("multer");
const {
  createTravelJournal,
  retrieveTravelJournal,
  retrieveSingleTravelJournalById,
  updateTravelJournal,
  deleteTravelJournal,
} = require("../controllers/travelJournalController.js");
const path = require("path");

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

const router = express.Router();

router.post("/travel", upload.array("upload", 4), createTravelJournal);
router.get("/travel", retrieveTravelJournal);
router.get("/travel/:id", retrieveSingleTravelJournalById);
router.put("/travel/:id", updateTravelJournal);
router.delete("/travel/:id", deleteTravelJournal);
module.exports = router;
