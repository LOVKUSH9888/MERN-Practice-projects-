const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log("DB connection established");
  } catch (error) {
    console.error("Error connecting to DB", error);
  }
};

// Named export
module.exports = dbConnection;
