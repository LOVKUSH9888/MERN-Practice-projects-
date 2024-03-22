const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");

const loginController = async (req, res) => {
  try {
    //Payload
    const { username, password } = req.body;

    //Finding user if it is in the DB or not
    const user = await User.findOne({ username: username });

    //If the user is not found in DB then simply return that invalid user
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    //Now checking the password
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    //Now generating the password
    const token = jwt.sign(
      {
        userId: user._id,
        role: user.role,
      },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );

    //Setting the token into the cookie
    res.cookie(process.env.SECRET_KEY, token, {
      httpOnly: true,
      maxAge: 360000,
    });

    res.json({ message: "login successfully", token: token });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = loginController;
