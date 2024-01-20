// CreatePost.js
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./CreatePost.css"

const CreatePost = ({ refreshPosts }) => {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");

  const handleCreatePost = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/createpost",
        {
          title,
          imageUrl,
          description,
        }
      );

      // Handle success, e.g., show a success message
      console.log("Post created successfully:", response.data);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });

      // Clear input fields after successful creation
      setTitle("");
      setImageUrl("");
      setDescription("");

      // Optionally, refresh the posts by calling the parent's refreshPosts function
      refreshPosts();
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="http://localhost:3000/">Home</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Create Post
            </li>
          </ol>
        </nav>
        <div className="col">
          <div>
            <h2>Create a New Post</h2>
            <form>
              <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="imageUrl">Image URL:</label>
                <input
                  type="text"
                  className="form-control"
                  id="imageUrl"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description:</label>
                <textarea
                  className="form-control"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="lovebtn"><button
                type="button"
                className="btn btn-primary my-4 text-center "
                onClick={handleCreatePost}
              >
                Create Post
              </button></div>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
