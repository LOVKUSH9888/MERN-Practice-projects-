import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row bg-primary text-white border border-dark">
          <div className="col-6 px-5 d-flex align-items-center">
            <h1 className="m-0">Facebook</h1>
          </div>
          <div className="col-6 d-flex align-items-center justify-content-end p-3 ">
            <input
              className="form-control me-2"
              type="text"
              placeholder="Email"
              name="email"
            />
            <input
              className="form-control me-2"
              type="password"
              placeholder="Password"
              name="password"
            />
            <button className="btn btn-dark w-50">Log In</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
