import React from "react";
import { Link } from "react-router-dom";
import useAuth from "./../../../hook/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="text-decoration-none me-5" to="/home">
          <h4 className="fw-bold  text-white">ElectoShop</h4>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="text-decoration-none fw-bold text-white"
                to="/home"
              >
                Home
              </Link>
            </li>
            <li className="nav-item ms-3">
              <Link
                className="text-decoration-none fw-bold text-white"
                to="/allproducts"
              >
                All Products
              </Link>
            </li>
          </ul>

          {user?.email ? (
            <div className="d-flex me-2">
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item me-4">
                    <Link
                      className="text-decoration-none fw-bold text-white"
                      to="/dashboard"
                    >
                      Dashboard
                    </Link>
                  </li>
                </ul>
              </div>
              <button
                onClick={logOut}
                className="btn btn-outline-danger"
                type="submit"
              >
                Log Out
              </button>
              <p className="text-light mt-3 ms-2">{user.displayName}</p>
            </div>
          ) : (
            <div className="d-flex me-2">
              <Link to="/login">
                <button className="btn btn-outline-success" type="submit">
                  Login
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
