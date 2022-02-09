const asyncHandler = require("express-async-handler");

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
const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `DELETE GOALS ${req.params.id}` });
});

module.exports = {
  getGoals,
  postGoals,
  putGoals,
  deleteGoals,
};
