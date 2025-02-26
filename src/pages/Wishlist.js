import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../redux/actions/WishlistActions.js";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { setFilter2 } from '../redux/actions/ProductActions.js';
import BestSellingProducts from '../components/best.js';
import { addCart } from '../redux/actions/CartActions.js';
import toast from 'react-hot-toast';

function Wishlist() {
  const wishlist = useSelector((state) => state.wishlist.wishlist);

  const dispatch = useDispatch();
  const { filter2 } = useSelector((state) => state.products);
  const products = useSelector((state) => state.products.products);

  // Handle filtering products with rating greater than 4
  const handleFilter2 = () => {
    const bestSelling = products.filter(
      (item) => item.rating > 4
    );
    dispatch(setFilter2(bestSelling));
  };
  const handleRemove = (id) => {
    dispatch( removeFromWishlist(id));
    toast.success("item removed")
  };

  useEffect(() => {
    handleFilter2();
  }, [products]);


  return (
    <>
      <Navbar />
      <div className="container py-5 ">
        <div className="header">
          <h2 className='my-3'>Wishlist ({wishlist.length})</h2>

        </div>
        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-3">
          {wishlist.map((item) => (
            <div className="col mb-3 gap-3" key={item.id}>
              <div className="card hover-card h-100 mb-4" style={{ position: "relative" }}>
                <div className="img-div">
                  <img src={item.thumbnail} className="card-img-top" alt={item.title} />
                  <button
                    onClick={() => {addCart(item)
                      toast.success("added to cart")
                    }}
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
                   

                    <button onClick={() => handleRemove(item.id)}><i class="fa-solid fa-trash rounded-circle bg-white text-decoration-none text-dark"></i></button>
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
        <BestSellingProducts filter2={filter2} />
      </div>
      <Footer />
    </>
  );
}

export default Wishlist;
