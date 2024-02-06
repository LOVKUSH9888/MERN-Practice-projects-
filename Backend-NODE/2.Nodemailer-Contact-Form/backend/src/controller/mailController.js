const express = require('express');
const Contact = require('../models/contactSchema');
const transporter = require('../services/mailConfig'); // Adjust the path accordingly

const mailController = async (req, res) => {
  try {
    // Payload
    const { name, email, message } = req.body;

    // Creating a new object using the Contact model
    const contact = new Contact({
      name,
      email,
      message,
    });

    // Saving it into the DB
    await contact.save();

    // Send email
    const mailOptions = {
      from: 'lky9888@gmail.com',
      to: email,
      subject: 'Thank you for contacting us!',
      text: 'We received your message and will get back to you as soon as possible.',
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = mailController;
