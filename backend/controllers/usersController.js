const bcrypt = require("bcryptjs/dist/bcrypt");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

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
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("INVALID USER");
  }
});

// Login user
const loginUser = asyncHandler(async (req, res) => {
  //getting the data
  const { email, password } = req.body;
  const user = await User.findOne({ email }); //find gives an array but FindOne gives an Object
  //check user
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200);
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("INVALID USER");
  }
});

//Get user data
const getUser = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  registerUser,
  loginUser,
  getUser,
};
