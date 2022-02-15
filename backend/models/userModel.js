const mongoose = require("mongoose");

const userModel = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name field"],
    },
    email: {
      type: String,
      required: [true, "Please add an email field"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add a password field"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userModel);
