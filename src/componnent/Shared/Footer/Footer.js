import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container-fluid bg-dark p-5 mt-5">
      <div className="row">
        <div className="col-md-12 mx-auto">
          <h5 className="text-white mt-4">SUBSCRIBE NOW</h5>
          <h2 className="text-white mt-3">GET OUR UPDATES ALWAYS FAST</h2>
          <h5 className="text-white mt-3">
            YOUR PERSONAL DATA WILL ALWAYS BE SAFE
          </h5>
          <div className="d-flex align-items-center w-25 mx-auto mt-3 mb-4">
            <input
              type="email"
              className="form-control  mx-auto"
              id="inputPassword2"
              placeholder="Enter your email"
            />
            <button className="btn btn-warning">Subscribe</button>
          </div>
          <Link
            className="text-white text-decoration-none fw-bold mt-4"
            to="/home"
          >
            SEARCH <span className="me-2 ms-2">|</span>
          </Link>
          <Link
            className="text-white text-decoration-none fw-bold mt-4"
            to="/home"
          >
            ABOUT <span className="me-2 ms-2">|</span>
          </Link>
          <Link
            className="text-white text-decoration-none fw-bold mt-4"
            to="/home"
          >
            PRIVACY POLICY <span className="me-2 ms-2">|</span>
          </Link>
          <Link
            className="text-white text-decoration-none fw-bold mt-4"
            to="/home"
          >
            HELP
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
