const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

mongoose
  .connect("mongodb://localhost:27017/relation")
  .then((res) => console.log("connected"))
  .catch((err) => console.log(err));

app.use(bodyParser.json());
app.use(cors());

// Define the Blog schema
const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  likes: { type: Number, default: 0 },
  comments: [{ user: String, text: String }],
});

const Blog = mongoose.model("Blog", blogSchema);

// API endpoints

// Get all blogs
app.get("/api/blogs", async (req, res) => {
  try {
    const blogs = (await Blog.find()) || [];
    res.json(Array.isArray(blogs) ? blogs : []);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new blog
app.post("/api/blogs", async (req, res) => {
  const { title, content } = req.body;

  try {
    const newBlog = new Blog({ title, content });
    await newBlog.save();
    res.json(newBlog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Like a blog
app.post("/api/blogs/:id/like", async (req, res) => {
  const blogId = req.params.id;

  try {
    const blog = await Blog.findById(blogId);
    blog.likes += 1;
    await blog.save();
    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Comment on a blog
app.post("/api/blogs/:id/comment", async (req, res) => {
  const blogId = req.params.id;
  const { user, text } = req.body;

  try {
    const blog = await Blog.findById(blogId);

    if (!blog) {
      return res.status(404).json({ error: "Blog not found." });
    }

    // Update comments for the specific blog
    blog.comments.push({ user, text });
    await blog.save();

    // Retrieve the updated blog with populated comments
    const updatedBlog = await Blog.findById(blogId);

    // Send only the comments array in the response
    res.json({ comments: updatedBlog.comments });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
