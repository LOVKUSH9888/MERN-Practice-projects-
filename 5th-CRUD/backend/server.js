const express = require("express");
const mongoose = require('mongoose');
const dbConnection = require("./dbConnection/dbConnection");
const PostModel = require("./models/PostModel");
require("dotenv").config();

const app = express();

app.use(express.json());

// Checking the DB connection
dbConnection()
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });

// Creating a simple route
app.post("/createpost", async (req, res) => {
  try {
    const payload = new PostModel(req.body);
    const savedItem = await payload.save();
    res.status(200).json({ message: "Data saved successfully", data: savedItem });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
