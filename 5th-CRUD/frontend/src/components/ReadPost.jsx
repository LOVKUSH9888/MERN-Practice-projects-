// ReadPost.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';

const ReadPost = () => {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updatePostId, setUpdatePostId] = useState(null);
  const [updateTitle, setUpdateTitle] = useState('');
  const [updateDescription, setUpdateDescription] = useState('');

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
        setPostData(postData.filter(post => post._id !== postId));
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

  const handleShowUpdateModal = (postId, title, description) => {
    setUpdatePostId(postId);
    setUpdateTitle(title);
    setUpdateDescription(description);
    setShowUpdateModal(true);
  };

  const handleCloseUpdateModal = () => {
    setShowUpdateModal(false);
    setUpdatePostId(null);
    setUpdateTitle('');
    setUpdateDescription('');
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:8080/api/update/${updatePostId}`, {
        title: updateTitle,
        description: updateDescription,
      });

      if (response.status === 200) {
        // Update the state with the updated post
        setPostData(postData.map(post => (post._id === updatePostId ? response.data.data : post)));
        handleCloseUpdateModal();
      } else {
        console.error('Error updating post. Server returned:', response);
      }
    } catch (error) {
      console.error('Error updating post:', error);

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
                    <strong>Post ID:</strong> {post._id}
                  </p>
                  <button onClick={() => handleDelete(post._id)} className="btn btn-danger">
                    Delete
                  </button>
                  <button
                    onClick={() => handleShowUpdateModal(post._id, post.title, post.description)}
                    className="btn btn-primary"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Update Modal */}
      <Modal show={showUpdateModal} onHide={handleCloseUpdateModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                value={updateTitle}
                onChange={(e) => setUpdateTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter description"
                value={updateDescription}
                onChange={(e) => setUpdateDescription(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseUpdateModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ReadPost;
