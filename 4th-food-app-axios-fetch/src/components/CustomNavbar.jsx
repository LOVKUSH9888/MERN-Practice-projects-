import React from "react";

const CustomNavbar = () => {
  return (
    <>
      <div className="container-fluid p-0 border shadow p-3 mb-5 bg-body-tertiary align-items-center">
        <div className="row">
          <div className="col-4 d-flex justify-content-start px-5 mt-2 text-center ">Logo</div>
          <div className="col-4 d-flex justify-content-center px-5 mt-2 text-center gap-5"><p>Home</p>
          <p>About Us</p>
          <p>Conatct Us</p>
          </div>
          <div className="col-4 d-flex justify-content-end px-5 mt-2 ">
            <input type="text" name="search" placeholder="Search" className="mx-2 border rounded text-center"/>
            <button className="btn btn-primary  ">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomNavbar;
