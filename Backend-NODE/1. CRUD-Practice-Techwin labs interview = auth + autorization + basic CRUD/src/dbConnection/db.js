const mongoose = require("mongoose");

// mongoose.connect('mongodb://127.0.0.1:27017/lovek');

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("DB connection established");
  } catch (error) {
    console.error("There is error while connecting to Mongo", error.message);
  }
};

module.exports = dbConnection;
