import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useAddToCart from "./handle authontication.js";
import useAddTowishlist from '../components/wishlist-auth.js';

export default function BestSellingProducts({ filter2 }) {
  const [expanded, setExpanded] = useState(false); // Manage expanded state
  const dispatch = useDispatch()
  const addToCart = useAddToCart();
  const addToWishlist = useAddTowishlist()

  // Number of products to show before clicking "View All"
  const productsToShow = expanded ? filter2.length : 4

  return (
    <section>
      <div className="container">
        <div className='d-flex bg-light align-items-center' style={{ width: "136px" }}>
          <div style={{ width: "20px", height: "40px", backgroundColor: "#DB4444", borderRadius: "30px" }}></div>
          <h5 className='ms-3' style={{ color: "#DB4444" }}>This Month</h5>
        </div>
        <div className="header d-flex justify-content-between py-3 my-3">
          <h2 className="fw-bold">Best Selling Products</h2>
          <button
            className="btn btn-light"
            onClick={() => setExpanded(!expanded)} // Toggle expanded state
          >
            {expanded ? "Show Less" : "View All"}
          </button>
        </div>

        {/* Show products in grid format */}
        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 ">
          {filter2.slice(0, productsToShow).map((item) => (
            <div key={item.id} >
              <div className="card  hover-card h-100 mb-4 " style={{ position: "relative" }}>
                <div className="img-div">
                  <img src={item.thumbnail} className="card-img-top" alt={item.title} />
                  {/* Add to Cart button (FIXED) */}
                  <button
                    onClick={() => addToCart(item)} // Show toast

                    className='w-100 btn-add-cart'
                  >
                    Add to Cart
                  </button>

                </div>
                <div className="card-img-overlay d-flex justify-content-between">
                  <div className=" text-white text-center" style={{ height: "26px", width: "55px", background: "#DB4444" }}>
                    -{Math.floor(item.discountPercentage)}%
                  </div>
                  <div className="text-dark text-center d-flex flex-column justify-content-between" style={{ height: "46px", width: "55px" }}>
                    <button
                      // onClick={() => {
                      //   dispatch(addToWishlist(item));
                      //   toast.success("Added to Wishlist");
                      // }}
                      onClick={() => addToWishlist(item)}
                      className='bg-white rounded-circle fav-icon'
                      style={{ border: "none" }}
                    >
                      <i className="fa-regular fa-heart"></i>
                    </button>

                    <Link className='rounded-circle bg-white text-decoration-none text-dark' to={"/product/" + item.id}><i className="fa-regular fa-eye"></i></Link>

                  </div>
                </div>
                <div className="card-body">
                  <p className="card-text flex-grow-1">{item.title}</p>
                  <span className="text-decoration-line-through fw-semibold">${Math.floor(item.price)}</span> <span className='ms-3 fw-semibold'>${Math.floor(item.price - (item.price * item.discountPercentage / 100))}</span>
                  <div className="stars">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span key={index} style={{ color: index < Math.floor(item.rating) ? "gold" : "gray" }}>
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <hr />
      </div>
    </section>
  );
}
