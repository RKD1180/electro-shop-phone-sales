import React from "react";
import sli1 from "../../../img/slider1.jpg";
import sli3 from "../../../img/b7.png";
import sli4 from "../../../img/b8.png";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={sli1} height="500px" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h2>By Your Dream Phone </h2>
            <Link className="text-decoration-none" to="/allproducts">
              <button className="btn btn-warning btn-lg mb-5">Explore</button>
            </Link>
          </div>
        </div>
        <div className="carousel-item">
          <img src={sli4} height="500px" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <Link className="text-decoration-none" to="/allproducts">
              <button className="btn btn-warning btn-lg mb-5">Explore</button>
            </Link>
          </div>
        </div>
        <div className="carousel-item">
          <img src={sli3} height="500px" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <Link className="text-decoration-none" to="/allproducts">
              <button className="btn btn-warning btn-lg mb-5">Explore</button>
            </Link>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
