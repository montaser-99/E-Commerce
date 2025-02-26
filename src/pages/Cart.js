import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { delCart, clearCart, addCart } from "../redux/actions/CartActions";
import Footer from '../components/Footer'
import Navbar from '../components/Navbar';


function Cart() {
    const cart = useSelector((state) => state.cart); 

    let subtotal = 0;
    let shipping = 0;

    cart.forEach((item) => {
        subtotal += Math.floor(item.price * item.qty);
    });

    // Store subtotal in localStorage
    localStorage.setItem("subtotal", subtotal);

    // Calculate and store shipping
    shipping = subtotal > 100 ? 0 : 10;
    localStorage.setItem("shipping", shipping);

    // Calculate and store total
    const total = subtotal + shipping;
    localStorage.setItem("total", total);


    const dispatch = useDispatch();


    const additem = (product) => {
        dispatch(addCart(product));
    };
    const removeItem = (product) => {
        dispatch(delCart(product));
    };
    const handleClearCart = () => {
        dispatch(clearCart());
        localStorage.removeItem("cart");
    };


    if (!cart || cart.length === 0) {
        return (
            <>
                <Navbar />
                <div className="container vh-100">
                    <h2 className="text-center text-xl my-5 py-5 display-1">Your cart is empty</h2>
                    <div className="d-flex justify-content-center">
                        <Link to="/" className='btn-1  text-decoration-none '>
                            Back to Home Page
                        </Link>
                    </div>

                </div>

                <Footer />
            </>
        );
    }


    return (<>
        <Navbar />
        <div className="container mt-4">
            <div className="row row-cols-4">
                <div className="col"><strong>Product</strong></div>
                <div className="col"><strong>Price</strong></div>
                <div className="col">
                    quantity
                </div>
                <div className="col"><strong>Subtotal</strong></div>
            </div>
            {cart.map((item) => (
                <div key={item.id} className="row row-cols-4 bg-white mb-3 p-3 shadow align-items-center">
                    <div className="col font-weight-bold d-flex align-items-center gap-2 flex-column flex-sm-row">
                        <img src={item.thumbnail} className="img-fluid" style={{ height: "54px", width: "54px" }} alt="Product" />
                        {item.title}
                    </div>


                    <div className="col">${item.price}</div>
                    <div className="col d-flex align-items-center gap-2 ">
                        <span>{item.qty}</span>
                        <div className="d-flex flex-column">
                            <button
                                className="btn "
                                onClick={() => additem(item)}
                            >
                                <i class="fa-solid fa-arrow-up"></i>
                            </button>
                            <button
                                className="btn "
                                onClick={() => removeItem(item)}
                            >
                                <i class="fa-solid fa-arrow-down"></i>
                            </button>
                        </div>



                    </div>
                    <div className="col">Subtotal: ${Math.floor(item.price * item.qty)}</div>
                </div>
            ))}
            <div className="row d-flex justify-content-between">
                <div className="col-auto">
                    <Link to={"/"} className="btn border border-dark">Return To Shop</Link>
                </div>

                <div className="col-auto">
                    <button className="btn border border-dark"
                        onClick={handleClearCart}

                    >Update Cart</button>
                </div>
            </div>
            <div className="row d-flex justify-content-between py-5 my-5">
                <div className="col-lg-8 col-sm-12 ">
                    <div className="my-4 d-flex justify-content-center">
                        <input className="form-control w-auto" placeholder="Enter coupon" />
                        <button className="btn-1 text-white mx-2">Apply Coupon</button>
                    </div>




                </div>
                <div className="col-lg-4 col-md-12 col-sm 1 border border-2 border-dark">
                    <h2 className="my-5">Cart Total</h2>
                    <div className="d-flex justify-content-around align-items-center ">
                        <p>subtotal:</p>
                        <p>{Math.floor(subtotal)}</p>
                    </div>
                    <hr></hr>
                    <div className="d-flex justify-content-around align-items-center">
                        <p>shipping:</p>
                        <p>{shipping}</p>
                    </div>
                    <hr></hr>
                    <div>
                        <div className="d-flex justify-content-around align-items-center">
                            <span>total:</span>
                            <span>${Math.floor(total)}</span>

                        </div>

                        <div className="mx-auto">
                            <Link to={"/checkout"} className="btn-1 d-block mx-auto my-5 text-decoration-none">Procees to checkout</Link>
                        </div>

                    </div>

                </div>

            </div>

        </div>
        <Footer />
    </>
    );
}

export default Cart;
