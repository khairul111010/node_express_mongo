const express = require("express");
const dotenv = require("dotenv").config();
<<<<<<< HEAD
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
=======
const { getGoals } = require("../backend/controllers/goalsController");
const { errorHandler } = require("./middleware/errorMiddleware");
>>>>>>> a96bf58e6d97c352c5345c51a65b931cb2c9120a
const port = process.env.PORT || 8000;
connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//TO ENABLE URL ENCODED POST
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routers/goalsRoute")); //GOAL ROUTE

app.use(errorHandler); //ERROR HANDLER MIDDLEWARE

app.use(errorHandler);

app.listen(port, () => {
  console.log(`listening to ${port}`);
});
