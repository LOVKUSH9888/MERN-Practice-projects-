import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <>
    <div className="container-fluid p-0">
      <Navbar expand="lg" className="bg-body-tertiary ">
        <Container className="bg-dark">
          <Navbar.Brand href="/" className=" text-white">Crud-MERN</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav " />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link href="/" className=" text-white">Home</Nav.Link>
              <Nav.Link href="/" className=" text-white">LOL</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
    </>
  );
};

export default Header;
