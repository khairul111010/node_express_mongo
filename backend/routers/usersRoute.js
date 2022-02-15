const express = require("express");
const router = express.Router();
const {
  getUsers,
//   postGoals,
//   putGoals,
//   deleteGoals,
} = require("../controllers/usersController");

router.route("/register").get(getUsers);
// router.route("/:id").put(putGoals).delete(deleteGoals);

module.exports = router;