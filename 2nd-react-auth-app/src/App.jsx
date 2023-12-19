import React, { useState } from "react"; // Import React and useState
import "./App.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function App() {
  // Hooks
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /*  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Destructure values from formData
  const { email, password } = formData;

  // Functions
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };*/

  // Functions
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === "lovkush@gmail.com" && password === "qwerty") {
      alert("Success!");
    } else {
      alert("Error!");
    }
  };

  // Return
  return (
    <>
      <div className="container justify-content-center text-white mt-5 t">
        <div className="row">
          <div className="col">
            <h1 className="text-center">Auth System</h1>
            {/* Form */}
            <Form onSubmit={handleSubmit}>
              {" "}
              {/* Add onSubmit to the Form */}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={handleEmail}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePassword}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
