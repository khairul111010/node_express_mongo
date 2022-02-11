const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 8000;
connectDB();

const app = express();

//TO ENABLE URL ENCODED POST
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routers/goalsRoute")); //GOAL ROUTE

app.use(errorHandler); //ERROR HANDLER MIDDLEWARE

app.listen(port, () => {
  console.log(`listening to ${port}`);
});
