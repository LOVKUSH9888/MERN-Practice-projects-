const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "lky9888@gmail.com",
    pass: process.env.PASSWORD,
  },
});

module.exports = transporter;
