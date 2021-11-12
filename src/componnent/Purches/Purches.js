import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAuth from "./../../hook/useAuth";

const Purches = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [product, setProduct] = useState({});

  const initialInfo = {
    email: user.email,
    productsName: product.name,
    price: product.price,
    name: "",
    phone: "",
  };
  useEffect(() => {
    const url = `https://damp-everglades-52916.herokuapp.com/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
  const [orderInfo, setOrderInfo] = useState(initialInfo);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...orderInfo };
    newInfo[field] = value;
    setOrderInfo(newInfo);
  };

  const handleOrder = (e) => {
    const order = {
      ...orderInfo,
      price: product.price,
      productsName: product.name,
      img: product.img,
      status: "Pending",
    };
    const url = `https://damp-everglades-52916.herokuapp.com/orders`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Order Place Successfully..");
        }
      });

    e.preventDefault();
  };

  return (
    <div className="container w-50">
      <h2 className="mt-5 mb-5 fw-bold">Place Order</h2>
      <div className="row">
        <div className="col-md-12 col-sm-12 w-75 text-start shadow p-5 rounded mx-auto">
          <form onSubmit={handleOrder}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={user.email}
                name="email"
                onBlur={handleOnBlur}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Enter Your Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="name"
                onBlur={handleOnBlur}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Products Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="productName"
                onBlur={handleOnBlur}
                value={product.name}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Price
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="price"
                onBlur={handleOnBlur}
                value={product.price}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="phone"
                onBlur={handleOnBlur}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purches;
