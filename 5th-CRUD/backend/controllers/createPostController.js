const PostModel = require("../models/PostModel");

const createPostController = async (req, res) => {
  try {
    const payload = new PostModel(req.body);
    const savedItem = await payload.save();
    res.status(200).json({ message: "Data saved successfully", data: savedItem });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Named export
module.exports = createPostController;
