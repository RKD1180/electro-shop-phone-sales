import React from "react";
import Rating from "react-rating";
import "./Review.css";

const Reviews = (props) => {
  const { name, rating, review } = props.review;
  return (
    <div className="col-md-4 col-sm-12 mb-4">
      <div className="card" style={{ width: "18rem;" }}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{review.slice(0, 150)}...</p>
          <Rating
            initialRating={rating}
            emptySymbol="far fa-star fa-2x"
            fullSymbol="fas fa-star fa-2x"
            className="text-warning"
          ></Rating>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
