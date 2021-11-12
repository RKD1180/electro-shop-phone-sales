import React, { useState } from "react";

const AddNewProduct = () => {
  const initialInfo = {};

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...productInfo };
    newInfo[field] = value;
    setProductInfo(newInfo);
  };
  const [productInfo, setProductInfo] = useState(initialInfo);
  const handleReview = (e) => {
    const product = {
      ...productInfo,
    };

    const url = `https://damp-everglades-52916.herokuapp.com/products`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Product Add SuccessFully Successfully..");
        }
      });

    e.preventDefault();
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 col-sm-12 w-75 text-start shadow p-5 rounded mx-auto mt-5">
          <h2 className="fw-bold mt-4 mb-3">Add A new Product</h2>
          <form onSubmit={handleReview}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Enter Product Name
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
              <label htmlFor="exampleInputEmail1" className="form-label">
                Product Description
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="desc"
                onBlur={handleOnBlur}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Product Image Link
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="img"
                onBlur={handleOnBlur}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Product Price
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="price"
                onBlur={handleOnBlur}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary mt-3">
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewProduct;
