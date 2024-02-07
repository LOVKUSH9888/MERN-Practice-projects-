const mongoose = require("mongoose");

if (!process.env.DB_URL) {
  console.log("Please specify DB_URL in .env");
}

exports.dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Db connection established");
  } catch (error) {
    console.log("There is error while connecting to DB", error);
  }
};
