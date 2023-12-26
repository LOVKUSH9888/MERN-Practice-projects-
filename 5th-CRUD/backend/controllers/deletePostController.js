const PostModel = require("../models/PostModel");

const deletePostController = async (req, res) => {
  try {
    console.log('Deleting item with ID:', req.params.id);
    const deletePayload = await PostModel.findByIdAndDelete(req.params.id);
    console.log('Delete Payload:', deletePayload);
    res.status(200).json({ msg: "Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Named export
module.exports = deletePostController;
