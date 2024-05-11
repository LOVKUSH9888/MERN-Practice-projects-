const mongoose = require("mongoose");

const mongoURL = "mongodb://localhost:27017/like+comment";

async function connectToDatabase() {
  try {
    await mongoose.connect(mongoURL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}


// Export the function for use elsewhere
module.exports = connectToDatabase;
