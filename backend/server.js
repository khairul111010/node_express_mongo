const express = require("express");
const dotenv = require("dotenv").config();

const port = process.env.PORT || 8000;

const app = express();

app.get("/api/goals", (req, res) => {
  res.send("GET GOALS");
});

app.listen(port, () => {
  console.log(`listening to ${port}`);
});
