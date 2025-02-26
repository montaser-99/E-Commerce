import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import useAddToCart from "../components/handle authontication.js";
import useAddTowishlist from '../components/wishlist-auth.js';

function Productdetails() {
    const dispatch = useDispatch();
    const addToCart = useAddToCart();
    const addToWishlist = useAddTowishlist();
    const { matchedid } = useParams();

    const products = useSelector(state => state.products.products);
    console.log("Matched ID:", matchedid);
    console.log("All Products:", products);

    if (!products || products.length === 0) {
        return <h2>Loading products...</h2>;
    }

    const product = products.find((item) => item.id === parseInt(matchedid));
    console.log(product);

    if (!product) {
        return <h2>Product not found</h2>;
    }

    const roundedRating = Math.round(product.rating);

    return (
        <>
            <Navbar />
            <div className='container'>
                <div className='row my-5'>
                    <div className='col-6 d-flex gap-4'>
                        <div className='col-3 d-flex flex-column gap-5 '>
                            {product.images.slice(1).map((item, index) => (
                                <img
                                    key={index}
                                    src={item}
                                    alt={`Thumbnail ${index + 1}`}
                                    className='img-fluid rounded shadow-sm'
                                    style={{ cursor: 'pointer', height: '100px', objectFit: 'cover' }}
                                />
                            ))}
                        </div>

                        <div className='col-7'>
                            <img
                                src={product.images[0]}
                                alt='Main Product'
                                className='img-fluid rounded shadow'
                            />
                        </div>
                    </div>

                    <div className='col-6'>
                        <h2>{product.title}</h2>
                        <div className="stars">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <span key={index} style={{ color: index < roundedRating ? "gold" : "gray" }}>
                                    ★
                                </span>
                            ))}
                            <span> reviews ({product.reviews.length}) | {product.availabilityStatus}</span>
                        </div>
                        <span className="text-decoration-line-through fw-semibold">${Math.floor(product.price)}</span> <span className='ms-3 fw-semibold'>${Math.floor(product.price - (product.price * product.discountPercentage / 100))}</span>
                        <p>{product.description}</p>
                        <hr />
                        <div className='d-flex justify-content-between align-items-center'>
                            <button onClick={() => addToCart(product)} className='btn-1'>
                                Buy Now
                            </button>
                            <button
                                onClick={() => addToWishlist(product)}
                                className='border text-center'
                                style={{ height: "40px", width: "40px", cursor: "pointer" }}
                            >
                                <i className="fa-solid fa-heart"></i>
                            </button>
                        </div>
                        <div className='border border-solid mt-5'>
                            <div className='d-flex justify-content-evenly align-items-center p-4 w-100'>
                                <i className="fa-solid fa-truck" style={{ fontSize: '30px' }}></i>
                                <div className="ms-3">
                                    <h5>Free Delivery</h5>
                                    <p>Enter your postal code for Delivery Availability</p>
                                </div>
                            </div>

                            <hr />

                            <div className='d-flex justify-content-evenly align-items-center p-4 w-100'>
                                <i className="fa-solid fa-right-left" style={{ fontSize: '30px' }}></i>
                                <div className="ms-3">
                                    <h5>Return Delivery</h5>
                                    <p>Free 30 Days Delivery Returns. Details </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Productdetails;
