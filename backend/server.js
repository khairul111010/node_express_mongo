const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");
const port = process.env.PORT || 8000;
connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routers/goalsRoute")); //GOAL ROUTE
app.use("/api/users", require("./routers/usersRoute")); //User ROUTE

app.use(errorHandler); //ERROR HANDLER MIDDLEWARE

app.listen(port, () => {
  console.log(`listening to ${port}`);
});
