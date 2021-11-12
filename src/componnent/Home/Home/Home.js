import React, { useEffect, useState } from "react";
import pdimg from "../../../img/5.png";
import HomeProducts from "./../HomeProducts/HomeProducts";
import Slider from "./../Slider/Slider";
import Reviews from "./../Reviews/Reviews";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [reviews, setReviews] = useState([]);
  const latesProducts = products.slice(0, 6);
  // show home page product
  useEffect(() => {
    const url = `https://damp-everglades-52916.herokuapp.com/reviews`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  // show review
  useEffect(() => {
    const url = `https://damp-everglades-52916.herokuapp.com/products`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <Slider></Slider>
      {/* product section */}
      <div className="container mt-5">
        <h2 className="fw-bold text-primary mt-4 mb-4">Latest Products</h2>
        <div className="row">
          {latesProducts.map((product) => (
            <HomeProducts key={product._id} product={product}></HomeProducts>
          ))}
        </div>
      </div>
      {/* Latest phone */}
      <div className="container mt-4 mb-4">
        <h2>RAISE YOUR EXPECTATIONS</h2>
        <h5 className="mt-3 mb-3">REFINED VIEWING EXPERIENCE</h5>
        <div className="row">
          <div className="col-md-6 col-sm-12 mt-5">
            <h2 className="fw-bold">OnePlus 9RT Summary</h2>
            <p className="text-start ms-5">
              OnePlus 9RT mobile was launched on 13th October 2021. The phone
              comes with a 6.62-inch touchscreen display with a resolution of
              1080x2400 pixels at a pixel density of 397 pixels per inch (ppi)
              and an aspect ratio of 20:9. OnePlus 9RT is powered by an
              octa-core Qualcomm Snapdragon 888 processor. It comes with 8GB of
              RAM. The OnePlus 9RT runs Android 11 and is powered by a 4500mAh
              battery. The OnePlus 9RT supports proprietary fast charging.
            </p>
            <p className="text-start ms-5">
              As far as the cameras are concerned, the OnePlus 9RT on the rear
              packs a triple camera setup featuring a 50-megapixel primary
              camera with an f/1.8 aperture; a 16-megapixel camera with an f/2.2
              aperture, and a 2-megapixel camera. The rear camera setup has
              autofocus. It has a single front camera setup for selfies,
              featuring a 16-megapixel sensor with an f/2.4 aperture.
            </p>
          </div>
          <div className="col-md-6 col-sm-12">
            <img src={pdimg} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
      {/* Review section */}
      <div className="container">
        <h2 className="fw-bold mt-4 mb-4">Customer Says</h2>
        <div className="row">
          {reviews.map((review) => (
            <Reviews key={review._id} review={review}></Reviews>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
