const express = require("express");
const dotenv = require("dotenv").config();
const { getGoals } = require("../backend/controllers/goalsController");
const { errorHandler } = require("./middleware/errorMiddleware");
const port = process.env.PORT || 8000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routers/goalsRoute"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`listening to ${port}`);
});
