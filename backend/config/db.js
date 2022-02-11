const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async (req, res) => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Database connected to ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
