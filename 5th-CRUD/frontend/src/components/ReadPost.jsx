import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';
import './ReadPost.css'; 

const ReadPost = () => {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updatePostId, setUpdatePostId] = useState(null);
  const [updateTitle, setUpdateTitle] = useState('');
  const [updateDescription, setUpdateDescription] = useState('');
  const [expandedCards, setExpandedCards] = useState([]);

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
        setPostData(postData.filter((post) => post._id !== postId));
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Item Deleted',
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        console.error('Error deleting post. Server returned:', response);
      }
    } catch (error) {
      console.error('Error deleting post:', error);
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
        setPostData(
          postData.map((post) => (post._id === updatePostId ? response.data.data : post))
        );
        handleCloseUpdateModal();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Item Updated',
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        console.error('Error updating post. Server returned:', response);
      }
    } catch (error) {
      console.error('Error updating post:', error);
      if (error.response && error.response.data) {
        console.error('Server error message:', error.response.data);
      }
    }
  };

  const toggleCardExpansion = (postId) => {
    setExpandedCards((prevExpandedCards) =>
      prevExpandedCards.includes(postId)
        ? prevExpandedCards.filter((id) => id !== postId)
        : [...prevExpandedCards, postId]
    );
  };

  return (
    <div className="container">
      <h1>Your React Component</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="row">
          {postData.map((post) => (
            <div key={post._id} className="col-md-4">
              <div className="card mb-4 custom-card">
                <img src={post.imageUrl} className="card-img-top" alt="Post" />
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">
                    {expandedCards.includes(post._id)
                      ? post.description
                      : post.description.substring(0, 100) + '...'}
                  </p>
                  {post.description.length > 100 && (
                    <div className="text-center">
                      <Button
                        onClick={() => toggleCardExpansion(post._id)}
                        variant={expandedCards.includes(post._id) ? 'secondary' : 'primary'}
                      >
                        {expandedCards.includes(post._id) ? 'Read less' : 'Read more'}
                      </Button>
                    </div>
                  )}
                  <button onClick={() => handleDelete(post._id)} className="btn btn-danger mt-3 mx-3">
                    Delete
                  </button>
                  <button
                    onClick={() => handleShowUpdateModal(post._id, post.title, post.description)}
                    className="btn btn-primary mt-3 mx-3"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

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
