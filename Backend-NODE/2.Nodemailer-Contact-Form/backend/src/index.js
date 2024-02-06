const express = require("express");
const dbConnection = require("./utils/dbConnection");
const app = express();
const bodyParser = require("body-parser");
const router = require("./routes/route");
require("dotenv").config();

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Calling the DB connection
dbConnection();

app.use("/api", router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
