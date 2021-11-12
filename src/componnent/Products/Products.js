import React, { useEffect, useState } from "react";
import Product from "./Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = `https://damp-everglades-52916.herokuapp.com/products`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="container mt-4">
      <h2 className="mt-4 mb-4 fw-bold text-success">
        By A Latest Smart Phone
      </h2>
      <div className="row">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
