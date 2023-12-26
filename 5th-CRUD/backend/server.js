const express = require("express");
const dbConnection = require("./dbConnection/dbConnection");
const routes = require("./routes/Routes");
const cors = require('cors');
require("dotenv").config();
const app = express();

// Use CORS middleware
app.use(cors());

app.use(express.json());
app.use("/api/", routes);

// Checking the DB connection
dbConnection();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
