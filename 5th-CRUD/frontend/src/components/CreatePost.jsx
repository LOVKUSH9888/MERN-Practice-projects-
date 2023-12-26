import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');

  const handleCreatePost = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/createpost', {
        title,
        imageUrl,
        description,
      });

      // Handle success, e.g., show a success message
      console.log('Post created successfully:', response.data);

      // Clear input fields after successful creation
      setTitle('');
      setImageUrl('');
      setDescription('');
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error('Error creating post:', error);
    }
  };

  return (
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
        <button type="button" className="btn btn-primary" onClick={handleCreatePost}>
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
