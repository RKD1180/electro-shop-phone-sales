import React from "react";
import { Link } from "react-router-dom";

const HomeProducts = ({ product }) => {
  const { _id, name, desc, img, price } = product;
  return (
    <div className="col-md-4 col-sm-12 mb-4">
      <div className="card" style={{ width: "20rem" }}>
        <img
          src={img}
          height="300px"
          width="300px"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{desc.slice(0, 30)}</p>
          <div className="d-flex justify-content-between">
            <Link to={`/purches/${_id}`}>
              <button className="btn btn-warning fw-bold" type="submit">
                Buy Now
              </button>
            </Link>

            <h5 className="me-3 mt-1" style={{ color: "#686868" }}>
              Price: {price} Taka
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProducts;
