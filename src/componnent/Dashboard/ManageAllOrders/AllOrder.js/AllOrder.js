import React, { useState } from "react";

const AllOrder = (props) => {
  const { _id, img, name, phone, email, productsName, price, status } =
    props.order;
  let [state, setState] = useState({});

  const handleCancle = (id) => {
    const confirmCancle = window.confirm("Are You Sure..");
    if (confirmCancle) {
      const url = `https://damp-everglades-52916.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Your Order Cancel Successfully.");
          }
        });
    }
  };

  const handleStatus = (id) => {
    state = { status: "Approve" };
    let status = { status: "Approve" };
    setState(status);
    const url = `https://damp-everglades-52916.herokuapp.com/orders/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(state),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("Status Chnage Successfully.");
        }
      });
  };

  return (
    <div className="col-md-6">
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={img} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{productsName}</h5>
              <p className="fw-bold">Price: {price}</p>
              <p>Email: {email}</p>
              <p>Phone: {phone}</p>
              <p>Name: {name}</p>

              <div>
                <button
                  onClick={() => handleStatus(_id)}
                  className="btn btn-warning mt-3"
                >
                  {status}
                </button>
                <button
                  onClick={() => handleCancle(_id)}
                  className="btn btn-danger mt-3 ms-3"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllOrder;
