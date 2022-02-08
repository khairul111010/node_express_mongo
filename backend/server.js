const express = require("express");
const dotenv = require("dotenv").config();

const port = process.env.PORT || 8000;

const app = express();

app.use("/api/goals", require("./routers/goalsRoute"));

app.listen(port, () => {
  console.log(`listening to ${port}`);
});
