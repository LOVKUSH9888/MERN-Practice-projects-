import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReadPost = () => {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/');
        setPostData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (postId) => {
    try {
      const response = await axios.delete(`http://localhost:8080/api/delete/${postId}`);
      if (response.status === 200) {
        // After successful deletion, update the state to remove the deleted post
        setPostData(postData.filter(post => post.postId !== postId));
      } else {
        console.error('Error deleting post. Server returned:', response);
      }
    } catch (error) {
      console.error('Error deleting post:', error);

      // Log the specific error message from the server, if available
      if (error.response && error.response.data) {
        console.error('Server error message:', error.response.data);
      }
    }
  };

  return (
    <div className="container">
      <h1>Your React Component</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="row">
          {postData.map(post => (
            <div key={post._id} className="col-md-4">
              <div className="card mb-4">
                <img src={post.imageUrl} className="card-img-top" alt="Post" />
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.description}</p>
                  <p className="card-text">
                    <strong>Post ID:</strong> {post.postId}
                  </p>
                  <button onClick={() => handleDelete(post.postId)} className="btn btn-danger">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReadPost;
