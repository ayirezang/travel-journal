const express = require("express");
const {
  createTravelJournal,
  retrieveTravelJournal,
  retrieveSingleTravelJournalById,
  updateTravelJournal,
  deleteTravelJournal,
} = require("../controllers/travelJournalController.js");

const router = express.Router();

router.post("/travel", createTravelJournal);
router.get("/travel", retrieveTravelJournal);
router.get("/travel/:id", retrieveSingleTravelJournalById);
router.put("/travel/:id", updateTravelJournal);
router.delete("/travel/:id", deleteTravelJournal);
module.exports = router;
