const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const travelJourSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  upDatedAt: {
    type: Date,
    default: Date.now,
  },
});
const travelJourModel = mongoose.model("Travel", travelJourSchema);
module.exports = travelJourModel;
