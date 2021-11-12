import React, { useEffect, useState } from "react";
import useAuth from "../../../hook/useAuth";
import MyOrder from "../MyOrder/MyOrder";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const url = `https://damp-everglades-52916.herokuapp.com/orders`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);
  const myorder = orders.filter((order) => order.email === user.email);

  return (
    <div className="container mt-5 mb-5">
      <h2 className="mt-5 mb-5">Your Order</h2>
      {orders.length === 0 ? (
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="row">
          <div className="col-md-12 col-sm-12">
            {myorder.map((order) => (
              <MyOrder key={order._id} order={order}></MyOrder>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
