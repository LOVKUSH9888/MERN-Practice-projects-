const PostModel = require("../models/PostModel");

const readPostController = async (req, res) => {
  try {
    const payload = await PostModel.find();
    res.status(200).json({ message: "Read post successfully", data: payload });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Named export
module.exports = readPostController;
