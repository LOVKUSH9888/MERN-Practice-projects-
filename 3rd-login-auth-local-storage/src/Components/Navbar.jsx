import React, { useState } from "react";

const Navbar = () => {
  // Hooks
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // event handlers
  const emailHandler = (e) => setEmail(e.target.value);
  const passwordHandler = (e) => setPassword(e.target.value);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    // Check if email and password are not empty
    if (!email.trim() || !password.trim()) {
      alert("Please enter both email and password");
      return;
    }

    // Retrieve existing users from local storage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find the user in the array
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      alert("Login Successful");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="container-fluid">
      <div className="row bg-primary text-white border border-dark">
        <div className="col-6 px-5 d-flex align-items-center">
          <h1 className="m-0">Facebook</h1>
        </div>
        <div className="col-6 d-flex align-items-center justify-content-end p-3">
          <form onSubmit={formSubmitHandler} className="d-flex">
            <input
              className="form-control mr-2"
              type="text"
              placeholder="Email"
              name="email"
              value={email}
              onChange={emailHandler}
              style={{ fontSize: "10px", margin: "5px" }}
            />
            <input
              className="form-control mr-2"
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={passwordHandler}
              style={{ fontSize: "10px", margin: "5px" }}
            />
            <button
              className="btn btn-dark"
              type="submit"
              style={{ fontSize: "10px", width: "10rem", margin: "5px" }}
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
