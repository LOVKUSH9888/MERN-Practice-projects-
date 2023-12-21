import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Body = () => {
  // Hooks
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // emailHandler
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  // passwordHandler
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  // formSubmitHandler
  const formSubmitHandler = (e) => {
    e.preventDefault();

    // Check if email and password are not empty
    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }

    // Retrieve existing users from local storage
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // Add a new user to the array
    const newUser = {
      email: email,
      password: password,
    };

    // Update users array with the new user 
    ///we can use push or unshift here but i prefer of using spread operator
    const updatedUsers = [...users, newUser];

    // Store the updated users array in local storage
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    alert("Registered Successfully")
    // Clear form fields
    setEmail("");
    setPassword("");
  };

  // Return Value
  return (
    <section className="container-fluid px-0">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-6 border border-dark rounded p-5">
          <header>
            <h1 className="mb-4">Sign Up Form</h1>
          </header>
          <Form onSubmit={formSubmitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={emailHandler}
              />
              <Form.Text className="text-dark">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={passwordHandler}
              />
            </Form.Group>

            <Button variant="dark" type="submit" className="w-100">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Body;
