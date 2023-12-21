import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Body = () => {
  // Hooks
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // emailHandler
  const emailHandler = (e) => {
    // console.log(e.target.value);
    setEmail(e.target.value);
  };

  // passwordHandler
  const passwordHandler = (e) => {
    // console.log(e.target.value);
    setPassword(e.target.value);
  };

  // formSubmitHandler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    const newUser = {
      email: email,
      password: password
    }
    // Now to storing it in the local storage
    localStorage.setItem("users", JSON.stringify(newUser));
  };

  // Return Value
  return (
    <div className="container-fluid px-0 ">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-6 border border-dark rounded p-5">
          <h1 className="mb-4">Sign Up Form</h1>
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
    </div>
  );
};

export default Body;
