const express = require("express");
const { register, login } = require("../controllers/authController");
const {
  userRegisterValidatior,
  runValidation,
  userLoginValidator,
  forgotPasswordValidator,
  resetPasswordValidator,
} = require("../validators/authValidator");
const router = express.Router();

router.post("/register", userRegisterValidatior, runValidation, register);
//Login with the userLoginValidator
router.post("/login", userLoginValidator, runValidation, login);
//forgotPassword
router.post("/forgot", forgotPasswordValidator, runValidation, login);
//reset
router.post("/reset", resetPasswordValidator, runValidation, login);

//Default exports
module.exports = router;
