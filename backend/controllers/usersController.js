const bcrypt = require("bcryptjs/dist/bcrypt");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

//Register a user
const registerUser = asyncHandler(async (req, res) => {
  //getting the data
  const { name, email, password } = req.body;
  //Empty validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Insert all field are not filled");
  }
  //user check
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User exists");
  }
  //hashed password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  //creating user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });
  //user response
  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
    });
  } else {
    throw new Error("INVALID USER");
  }
});

// Login user
const loginUser = (req, res) => {
  //   const users = await Goal.find();
  res.json({ messege: "Login" });
  //   res.status(200).json(goals);
};

//Get user data
const getUser = (req, res) => {
  //   const users = await Goal.find();
  res.json({ messege: "User data" });
  //   res.status(200).json(goals);
};

// const postGoals = asyncHandler(async (req, res) => {
//   if (!req.body.text) {
//     res.status(400);
//     throw new Error("INVALID TEXT VALUE");
//   }
//   const goal = await Goal.create({
//     text: req.body.text,
//   });
//   res.status(200).json(goal);
// });

// const putGoals = asyncHandler(async (req, res) => {
//   const goal = await Goal.findById(req.params.id);
//   if (!goal) {
//     res.status(400);
//     throw new Error("Does not exist");
//   }

//   const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//   });

//   res.status(200).json(updatedGoal);
// });

// const deleteGoals = asyncHandler(async (req, res) => {
//   const goal = await Goal.findById(req.params.id);
//   if (!goal) {
//     res.status(400);
//     throw new Error("Does not exist");
//   }
//   await goal.remove();

//   res.status(200).json({ id: req.params.id });
// });

module.exports = {
  registerUser,
  loginUser,
  getUser,
};
