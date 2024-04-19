const mongoose = require("mongoose");

// Define Mongoose Schema
const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    comments: [{ type: String }],
  });
  
  // Create Mongoose Model
  const Blog = mongoose.model('Blog', blogSchema);