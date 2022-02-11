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
  const goal = await Goal.create({
    text: req.body.text,
  });
  res.status(200).json(goal);
});

const putGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Does not exist");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedGoal);
});

const deleteGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Does not exist");
  }
  await goal.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getGoals,
  postGoals,
  putGoals,
  deleteGoals,
};
