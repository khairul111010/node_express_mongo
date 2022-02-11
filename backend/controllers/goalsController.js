const asyncHandler = require("express-async-handler");
<<<<<<< HEAD
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

=======

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "GET GOALS" });
});
const postGoals = asyncHandler(async (req, res) => {
  if (!req.body.test) {
    res.status(400);
    throw new Error("INVALID TEST VALUE");
  }
  res.status(200).json({ message: "POST GOALS" });
});
const putGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `PUT GOALS ${req.params.id}` });
});
>>>>>>> a96bf58e6d97c352c5345c51a65b931cb2c9120a
const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `DELETE GOALS ${req.params.id}` });
});

module.exports = {
  getGoals,
  postGoals,
  putGoals,
  deleteGoals,
};
