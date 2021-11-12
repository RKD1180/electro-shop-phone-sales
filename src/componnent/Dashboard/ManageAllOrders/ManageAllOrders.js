import React, { useEffect, useState } from "react";
import AllOrder from "./AllOrder.js/AllOrder";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const url = `https://damp-everglades-52916.herokuapp.com/orders`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);
  return (
    <div className="container mt-5 mb-5">
      <h2 className="mt-5 mb-5">All Orders</h2>
      {orders.length === 0 ? (
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="row">
          <div className="col-md-12 col-sm-12 ">
            {orders.map((order) => (
              <AllOrder key={order._id} order={order}></AllOrder>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageAllOrders;
