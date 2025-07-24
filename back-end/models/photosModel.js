const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const photoSchema = new Schema({
  filename: {
    type: String,
    required: true,
  },

  url: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  mimetype: {
    type: String,
    required: true,
  },

  uploadedAt: {
    type: Date,
    default: Date.now,
  },
  memoryId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Travel",
  },
});
const photoModel = mongoose.model("Photos", photoSchema);
module.exports = photoModel;
