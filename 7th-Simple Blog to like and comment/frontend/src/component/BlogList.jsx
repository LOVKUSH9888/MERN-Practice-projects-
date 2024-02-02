import React, { useState, useEffect } from "react";
import axios from "axios";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({ title: "", content: "" });
  const [commentUser, setCommentUser] = useState("");
  const [commentText, setCommentText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/blogs")
      .then((response) => {
        setBlogs(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message || "An error occurred while fetching blogs.");
        setLoading(false);
      });
  }, []);

  const handleLike = (id) => {
    axios
      .post(`http://localhost:5000/api/blogs/${id}/like`)
      .then((response) => {
        setBlogs((prevBlogs) =>
          prevBlogs.map((blog) => (blog._id === id ? response.data : blog))
        );
      })
      .catch((error) => console.error("Error liking blog:", error));
  };

  const handleComment = (id) => {
    const blog = blogs.find((blog) => blog._id === id);

    if (!blog) {
      console.error(`Blog with ID ${id} not found.`);
      return;
    }

    axios
      .post(`http://localhost:5000/api/blogs/${id}/comment`, {
        user: commentUser,
        text: commentText,
      })
      .then((response) => {
        const updatedBlogs = blogs.map((blog) =>
          blog._id === id ? { ...blog, comments: response.data.comments } : blog
        );
        setBlogs(updatedBlogs);
        setCommentUser("");
        setCommentText("");
      })
      .catch((error) => console.error("Error commenting on blog:", error));
  };

  const handleCreateBlog = () => {
    axios
      .post("http://localhost:5000/api/blogs", newBlog)
      .then((response) => {
        setBlogs((prevBlogs) => [...prevBlogs, response.data]);
        setNewBlog({ title: "", content: "" });
      })
      .catch((error) => console.error("Error creating blog:", error));
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!Array.isArray(blogs)) {
    console.error("Unexpected data format:", blogs);
    return <p>Blogs data is not in the expected format.</p>;
  }

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Blog List</h1>
      <div className="mb-4">
        <h2>Create a new blog</h2>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            value={newBlog.title}
            onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="Content"
            value={newBlog.content}
            onChange={(e) =>
              setNewBlog({ ...newBlog, content: e.target.value })
            }
          />
        </div>
        <button className="btn btn-primary" onClick={handleCreateBlog}>
          Create Blog
        </button>
      </div>
      <div>
        <h2>Blogs</h2>
        {blogs.map((blog) => (
          <div key={blog._id} className="card mb-3">
            <div className="card-body">
              <h3 className="card-title">{blog.title}</h3>
              <p className="card-text">{blog.content}</p>
              <p className="card-text">
                <small className="text-muted">Likes: {blog.likes}</small>
              </p>
              <button
                className="btn btn-primary mr-2"
                onClick={() => handleLike(blog._id)}
              >
                Like
              </button>
              <h4>Comments:</h4>
              {blog.comments.map((comment, index) => (
                <p key={index} className="card-text">
                  <small className="text-muted">
                    {comment.user}: {comment.text}
                  </small>
                </p>
              ))}
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your name"
                  value={commentUser}
                  onChange={(e) => setCommentUser(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your comment"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                />
              </div>
              <button
                className="btn btn-primary"
                onClick={() => handleComment(blog._id)}
              >
                Comment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
