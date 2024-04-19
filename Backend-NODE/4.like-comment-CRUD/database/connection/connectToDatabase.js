const mongoose = require("mongoose");

const mongoURL = "mongodb://localhost:27017/like+comment";
export async function connectToDatabase() {
  try {
    await mongoose.connect(mongoURL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}
// Call the function to connect to MongoDB

