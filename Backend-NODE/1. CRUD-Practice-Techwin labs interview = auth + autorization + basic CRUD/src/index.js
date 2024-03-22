const express = require("express");
const app = express();
const dbConnection = require("./dbConnection/db");
const router = require("./routes/routes");
const resourceRouter = require("./routes/resources/resource.routes");
const bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");

require("dotenv").config();
const port = process.env.PORT;
app.use(bodyParser.json());
app.use(cookieParser());

// Db Connection calling the function
dbConnection();

//Using the route
app.use("/api", router);
app.use("/api", resourceRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
