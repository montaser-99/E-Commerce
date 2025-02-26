import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import useAddToCart from "./handle authontication.js";
import useAddTowishlist from '../components/wishlist-auth.js';

export default function FlashSales({ filter1 }) {
  const dispatch = useDispatch();
  const sliderRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const [num, setNum] = useState(0);
  const addToCart = useAddToCart();
  const addToWishlist = useAddTowishlist()
  const add = () => setNum((prevNum) => prevNum + 1);

  useEffect(() => {
    const time = setInterval(add, 1000);
    return () => clearInterval(time);
  }, []);


  const chunkSize = 4;
  const chunkedProducts = [];
  for (let i = 0; i < filter1.length; i += chunkSize) {
    chunkedProducts.push(filter1.slice(i, i + chunkSize));
  }

  return (
    <section>
      <div className="container my-5">
        <div className='d-flex bg-light align-items-center' style={{ width: "136px" }}>
          <div style={{ width: "20px", height: "40px", backgroundColor: "#DB4444", borderRadius: "30px" }}></div>
          <h5 className='ms-3' style={{ color: "#DB4444" }}>Today’s</h5>
        </div>

        <div className="header py-3 my-3 d-flex justify-content-between">
          <div className="d-flex">
            <h2 className="fw-bold">Flash Sales</h2>
            <div className="d-flex fw-bold fs-5 text-center ms-5">
              <div className="mx-2">
                <p>Days:</p>
                {Math.floor(num / 86400)}
              </div>
              <div className="mx-2">
                <p>Hours:</p>
                {Math.floor((num % 86400) / 3600)}
              </div>
              <div className="mx-2">
                <p>Minutes:</p>
                {Math.floor((num % 3600) / 60)}
              </div>
              <div className="mx-2">
                <p>Seconds:</p>
                {num % 60}
              </div>
            </div>
          </div>

          <div>
            <button onClick={() => sliderRef.current.slickPrev()} className="btn btn-light me-2">‹</button>
            <button onClick={() => sliderRef.current.slickNext()} className="btn btn-light">›</button>
          </div>
        </div>

        <Slider
          ref={sliderRef}
          dots={false}
          infinite={false}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
        >
          {chunkedProducts.map((group, index) => (
            <div key={index}>
              <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {group.map((item) => (
                  <div key={item.id} className="col">
                    <div className="card hover-card h-100 mb-4" style={{ position: "relative" }}>
                      <div className="img-div">
                        <img src={item.thumbnail} className="card-img-top" alt={item.title} />
                        <button
                          onClick={() => addToCart(item)}
                          className='w-100 btn-add-cart'
                        >
                          Add to Cart
                        </button>
                      </div>

                      <div className="card-img-overlay d-flex justify-content-between">
                        <div className="text-white text-center" style={{ height: "26px", width: "55px", background: "#DB4444" }}>
                          -{Math.floor(item.discountPercentage)}%
                        </div>
                        <div className="text-dark text-center d-flex flex-column justify-content-between" style={{ height: "46px", width: "55px" }}>
                          <button

                            onClick={() => addToWishlist(item)}
                            className='bg-white rounded-circle fav-icon'
                            style={{ border: "none" }}
                          >
                            <i className="fa-regular fa-heart"></i>
                          </button>

                          <Link className='rounded-circle bg-white text-decoration-none text-dark' to={`/product/${item.id}`}>
                            <i className="fa-regular fa-eye"></i>
                          </Link>
                        </div>
                      </div>
                      <div className="card-body">
                        <p className="card-text flex-grow-1">{item.title}</p>
                        <span className="text-decoration-line-through fw-semibold">${Math.floor(item.price)}</span> <span className='ms-3 fw-semibold'>${Math.floor(item.price - (item.price * item.discountPercentage / 100))}</span>
                        <div className="stars">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <span key={i} style={{ color: i < Math.floor(item.rating) ? "gold" : "gray" }}>
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Slider>

        <div className="text-center my-5">
          <button className="btn-1" onClick={() => setExpanded(!expanded)}>
            {expanded ? "Show Less" : "View All Products"}
          </button>
        </div>

        <hr />
      </div>
    </section>
  );
}
