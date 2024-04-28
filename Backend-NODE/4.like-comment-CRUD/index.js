const express = require("express");
const bodyParser = require("body-parser");

const { getBlog } = require("./middleware");
const { connectToDatabase } = require("./database/connection/connectToDatabase");

connectToDatabase();

const app = express();
app.use(bodyParser.json());

//API
// Create Blog
app.post('/blogs', async (req, res) => {
  try {
      const { title, content } = req.body;
      const newBlog = new Blog({ title, content });
      await newBlog.save();
      res.status(201).json(newBlog);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
});

// Read a single Blog
app.get('/blogs/:id', getBlog, (req, res) => {
  res.json(res.blog);
});

// Update Blog
app.patch('/blogs/:id', getBlog, async (req, res) => {
  if (req.body.title != null) {
      res.blog.title = req.body.title;
  }
  if (req.body.content != null) {
      res.blog.content = req.body.content;
  }
  try {
      const updatedBlog = await res.blog.save();
      res.json(updatedBlog);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
});

// Delete Blog
app.delete('/blogs/:id', getBlog, async (req, res) => {
  try {
      await res.blog.remove();
      res.json({ message: 'Deleted Blog' });
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});

// Like Blog
app.post('/blogs/:id/like', getBlog, async (req, res) => {
  res.blog.likes++;
  try {
      const updatedBlog = await res.blog.save();
      res.json(updatedBlog);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
});

// Dislike Blog
app.post('/blogs/:id/dislike', getBlog, async (req, res) => {
  res.blog.dislikes++;
  try {
      const updatedBlog = await res.blog.save();
      res.json(updatedBlog);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
});

// Comment on Blog
app.post('/blogs/:id/comment', getBlog, async (req, res) => {
  const { comment } = req.body;
  if (comment != null) {
      res.blog.comments.push(comment);
  }
  try {
      const updatedBlog = await res.blog.save();
      res.json(updatedBlog);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
});

// Share Blog (This is just a placeholder API, you can implement sharing functionality as per your requirements)
app.post('/blogs/:id/share', getBlog, (req, res) => {
  res.json({ message: 'Shared Blog' });
});



//PORT LISTENING
app.listen(3000, () => {
  console.log("Port is running");
});
