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

  travelDate: {
    type: Date,
    required: true,
    validate: {
      validator: function (date) {
        return date <= new Date();
      },
      //  message:" travel date  cant be in the future"
    },
  },

  images: [
    {
      url: String,
      filename: String,
    },
  ],
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
