const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = newSchema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: false,
  },
  createdId: {
    type: Date,
    default: Date.now,
  },
});
const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
