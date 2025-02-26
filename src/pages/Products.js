import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import useAddToCart from "../components/handle authontication.js";
import useAddTowishlist from '../components/wishlist-auth.js';

function Products() {
    const addToCart = useAddToCart();
    const addToWishlist = useAddTowishlist()
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products.products);
    return (
        <>
            <Navbar />
            <section>
                <div className="container py-5">
                    <div className="header">
                        <h2 className='my-3 py-3 fw-semibold'>Explore Our Products</h2>
                    </div>
                    <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                        {products.map((item) => (
                            <div className="col mb-3 " key={item.id}>
                                <div className="card  hover-card h-100 mb-4 " style={{ position: "relative" }}>
                                    <div className="img-div">
                                        <img src={item.thumbnail} className="card-img-top" alt={item.title} />
                                        {/* Add to Cart button (FIXED) */}
                                        <button
                                            // onClick={(event) => {
                                            //     // handleAddToCart(event); 
                                            //     dispatch(addCart(item))
                                            //     toast.success("Added to cart"); // Show toast
                                            // }}
                                            onClick={() => addToCart(item)}

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

                                                // dispatch(addToWishlist(item));
                                                // toast.success("Added to Wishlist");
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
            <Footer />
        </>

    )
}

export default Products
