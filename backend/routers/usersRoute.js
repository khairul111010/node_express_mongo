const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUser,
} = require("../controllers/usersController");

router.route("/register").get(registerUser);
router.route("/login").get(loginUser);
router.route("/datauser").get(getUser);
// router.route("/:id").put(putGoals).delete(deleteGoals);

module.exports = router;
