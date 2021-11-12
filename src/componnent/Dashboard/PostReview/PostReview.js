import React, { useState } from "react";

const PostReview = () => {
  const initialInfo = {};

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...reviewInfo };
    newInfo[field] = value;
    setReviewInfo(newInfo);
  };
  const [reviewInfo, setReviewInfo] = useState(initialInfo);
  const handleReview = (e) => {
    const review = {
      ...reviewInfo,
    };
    const url = `https://damp-everglades-52916.herokuapp.com/reviews`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Review Submited Successfully..");
        }
      });

    e.preventDefault();
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 col-sm-12 w-75 text-start shadow p-5 rounded mx-auto mt-5">
          <h2 className="fw-bold mt-4 mb-3">Give FedBack</h2>
          <form onSubmit={handleReview}>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="name"
                onBlur={handleOnBlur}
                required
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Give A Rating Under 1-5
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="rating"
                onBlur={handleOnBlur}
                required
              />
            </div>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">Reviews</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="review"
                onBlur={handleOnBlur}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary mt-3">
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostReview;
