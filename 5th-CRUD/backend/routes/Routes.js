const express = require("express");
const createPostController = require("../controllers/createPostController");
const deletePostController = require("../controllers/deletePostController");
const readPostController = require("../controllers/readPostController");
const updatePostController = require("../controllers/updatePostController");
const router = express.Router();

// Create Post Route
router.post("/createpost", createPostController);

// Read Post Route
router.get("/", readPostController);

// Update Post Route
router.put("/update/:id", updatePostController);

// Delete Post Route
router.delete("/delete/:id", deletePostController);

// Named export
module.exports = router;
