const express = require("express");
const regController = require("../controllers/regController");
const loginController = require("../controllers/loginController");
const router = express.Router();

//Register Route
router.post("/register", regController);
router.post("/login", loginController);

// Default exports all the routes
module.exports = router;
