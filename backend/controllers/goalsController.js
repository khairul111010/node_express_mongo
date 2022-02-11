const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");

const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  // console.log(goals);
  res.status(200).json(goals);
});

const postGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("INVALID TEXT VALUE");
  }
  res.status(200).json({ message: "POST GOALS" });
});

const putGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `PUT GOALS ${req.params.id}` });
});

const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `DELETE GOALS ${req.params.id}` });
});

module.exports = {
  getGoals,
  postGoals,
  putGoals,
  deleteGoals,
};
