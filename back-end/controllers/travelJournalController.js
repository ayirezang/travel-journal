const travelJourModel = require("../models/travelJourModel");
const { validationResult } = require("express-validator");

//create controller

const createTravelJournal = async (req, res) => {
  //validation checks
  const error = validationResult(req);
  if (!error.isEmpty()) {
    console.log(error);
    return res.json({ message: error.array()[0].msg });
  }
  const { title, description, location } = req.body;
  try {
    const travelDetails = new travelJourModel({
      title,
      description,
      location,
    });

    const savedTravelJournal = await travelDetails.save();
    res.status(201).json(savedTravelJournal);
  } catch (error) {
    console.error("Error ", error);
    res.status(500).json({ message: "server error" });
  }
};

//retrieve  traveljournal

const retrieveTravelJournal = async (req, res) => {
  try {
    const travelJournal = await travelJourModel.find();
    res.json(travelJournal);
  } catch (error) {
    res.status(500).json({ message: "failed to fetch" });
  }
};

//retrieve a specific traveljournal by id

const retrieveSingleTravelJournalById = async (req, res) => {
  try {
    const id = req.params.id;
    const travelJournal = await travelJourModel.findById(id);
    if (travelJournal) {
      return res
        .status(200)
        .json({ message: "entry fetched", data: travelJournal });
    } else {
      return res.status(404).json({
        message: "entry not found",
      });
    }
  } catch (error) {
    return res.status(500).json({ message: " server error" });
  }
};

//update
const updateTravelJournal = async (req, res) => {
  //validation checks
  const error = validationResult(req);
  if (!error.isEmpty()) {
    console.log(error);
    return res.json({ message: error.array()[0].msg });
  }

  try {
    const { id } = req.params;

    const updatedTravelJournal = await travelJourModel.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedTravelJournal) {
      return res.status(404).json({ message: "not found" });
    }
    return res
      .status(200)
      .json({ message: "update successful", data: updatedTravelJournal });
  } catch (error) {
    // console.error("error:", error);
    return res.status(500).json({ message: "server error" });
  }
};

//delete
const deleteTravelJournal = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedEntry = await travelJourModel.findByIdAndDelete(id);
    if (!deletedEntry) {
      return res.status(404).json({ message: "entry not found" });
    }
    return res
      .status(200)
      .json({ message: "deleted successfully", data: deletedEntry });
  } catch (error) {
    return res.status(500).json({ message: "server error" });
  }
};

module.exports = {
  createTravelJournal,
  retrieveTravelJournal,
  retrieveSingleTravelJournalById,
  updateTravelJournal,
  deleteTravelJournal,
};
