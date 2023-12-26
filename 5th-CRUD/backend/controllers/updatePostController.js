const PostModel = require("../models/PostModel");

const updatePostController = async (req, res) => {
  try {
    const updatePayload = await PostModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "Data has been updated successfully", data: updatePayload });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Named export
module.exports = updatePostController;
