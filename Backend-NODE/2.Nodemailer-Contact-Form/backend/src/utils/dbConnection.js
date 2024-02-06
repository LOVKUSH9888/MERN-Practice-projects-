const mongoose = require("mongoose");
require("dotenv").config();

if (!process.env.DB_URL) {
  throw new Error("Please specify the DB_URL in environment variable");
}

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to database");
  } catch (error) {
    console.error(error);
  }
};

module.exports = dbConnection;
