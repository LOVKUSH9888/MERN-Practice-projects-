const express = require("express");
const router = require("./routes/route");
const app = express();
const bodyParser = require('body-parser')
require("dotenv").config();

//Middlewares
app.use(bodyParser.json())
//Routes
app.use("/api", router);

//PORT area
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
