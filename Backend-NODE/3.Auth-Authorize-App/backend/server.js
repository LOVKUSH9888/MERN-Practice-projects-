const express = require("express");
const router = require("./routes/route");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const { dbConnection } = require("./utils/dbConnection");
require("dotenv").config();

//Middlewares
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(bodyParser.json());
// app.use(cors()); // allows all origins
if ((process.env.NODE_ENV = "development")) {
  app.use(cors({ origin: `http://localhost:3000` }));
}

//dbConnection function calling 
dbConnection();
//Routers
app.use("/api", router);

//PORT area
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT} - ${process.env.NODE_ENV}`);
});
