import React from "react";
import "./Navbar.module.css";
const Navbar = () => {
  return (
    <>
      <div className="outer position-relative bg-primary d-flex justify-content-end bg-primary">
        <div className="inner bg-dark position-absolute">
          <a href="/" className="mb-2 px-2">
            Home
          </a>
          <a href="/" className="mb-2 px-2">
            About
          </a>
          <a href="/" className="mb-2 px-2">
            Contact Us
          </a>
          <a href="/" className="mb-2 px-2">
            Products
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
