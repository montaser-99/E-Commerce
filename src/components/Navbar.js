import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { setCategoryFilter } from '../redux/actions/ProductActions';
import { useState } from 'react';


function Navbar() {
    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        setTimeout(() => {
            window.location = "/login";
        }, 1000);
        toast.success("🚀 Successfully logged out!", {
            duration: 2000,
        });



    };


    const cart = useSelector(state => state.cart)
    const wishlist = useSelector((state) => state.wishlist.wishlist);
    const isLoggedIn = localStorage.getItem("isLoggedIn")


    const [searchCategory, setSearchCategory] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();  // Initialize navigate hook

    const handleCategorySearch = (e) => {
        const category = e.target.value;
        setSearchCategory(category); // Update local state for category
        dispatch(setCategoryFilter(category)); // Dispatch the action to Redux to filter products
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchCategory.trim() !== "") {
            // Check if the category exists in your list (you can fetch this from your API or Redux state)
            const validCategories = ['groceries', 'furniture', 'beauty',"fragrances"]; // Example categories, replace with your actual category list
            if (validCategories.includes(searchCategory.toLowerCase())) {
                // Navigate to the category page if valid
                navigate(`/category/${searchCategory}`);
            } else {
                // Handle invalid category (e.g., show an error message)
                toast.error("Category not found. Please try again!");
            }
        }
    };
    

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top border">
                <div class="container">
                    <Link to={"/"} class="navbar-brand text-dark text-decoration-none" >Exclusive</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to="/" class="nav-link ">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/contact" class="nav-link ">Contact</Link>
                            </li>

                            <li class="nav-item">
                                <Link to="/about" class="nav-link ">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/register" class="nav-link ">Sign Up</Link>
                            </li>

                        </ul>
                        <form class="d-flex align-items-center">
                            <div className="mx-3 bg-light d-flex align-items-center px-3 rounded">
                            <input
                                type="text"
                                className="form-control border-0 bg-light"
                                value={searchCategory} // Controlled input
                                onChange={handleCategorySearch} // Update the searchCategory state
                                placeholder="Search By Category"
                                aria-label="Search"
                                style={{ outline: "none", boxShadow: "none" }}
                            />
                            <i
                                className="fa-solid fa-magnifying-glass search-icon ms-2"
                                onClick={handleSearchSubmit} // Trigger search on click
                                style={{ cursor: "pointer" }} // Add pointer cursor for better UX
                            />
                            </div>
                            {isLoggedIn && (
                                <>
                                    <Link to="/wishlist" className="text-decoration-none mx-4 text-dark">
                                        <i className="fa-solid fa-heart me-1 position-relative icon fs-5">
                                            {wishlist.length !== 0 && (
                                                <span className="bg-danger rounded-circle text-white text-center  p-1" >
                                                    {wishlist.length}
                                                </span>
                                            )}
                                        </i>
                                    </Link>
                                    <Link to="/cart" className="text-decoration-none mx-2 text-dark">
                                        <i className="fa fa-cart-shopping me-1 position-relative icon fs-5">
                                            {cart.length !== 0 && (
                                                <span className="bg-danger rounded-circle text-white text-center  p-1" >
                                                    {cart.length}
                                                </span>
                                            )}
                                        </i>

                                    </Link>
                                </>


                            )}

                            {isLoggedIn && (
                                <div className="dropdown ms-3">
                                    <i
                                        className="fa-solid fa-user text-white rounded-circle me-1 dropdown-toggle"
                                        style={{ height: "28px", width: "28px", backgroundColor: "#DB4444", padding: "6px", cursor: "pointer" }}
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    ></i>

                                    <ul className="dropdown-menu dropdown-menu-end  text-start " style={{
                                        width: "190px",
                                        backgroundColor: " rgba(99, 92, 92, 0.8)",
                                        boxShadow: "17 40px 10px rgba(192, 170, 170, 0.2)",
                                        border: "none"
                                    }}>
                                        <li>
                                            <Link to="/acount" className="dropdown-item text-white text-decoration-none" style={{ backgroundColor: "transparent" }}><i class="fa-solid fa-user mx-1"></i>Manage My Account</Link>
                                        </li>
                                        <li>
                                            <Link to="/checkout" className="dropdown-item text-white text-decoration-none" style={{ backgroundColor: "transparent" }}><i class="fa-solid fa-ticket mx-1"></i>My Order</Link>
                                        </li>
                                        {/* <li>
                                        <Link to="/logout" className="dropdown-item">My Cancellations</Link>
                                    </li>
                                    <li>
                                        <Link to="/logout" className="dropdown-item">My Cancellations</Link>
                                    </li> */}
                                        <li>
                                            <Link className="dropdown-item text-white text-decoration-none" style={{ backgroundColor: "transparent" }} onClick={handleLogout}><i class="fa-solid fa-right-from-bracket mx-1" ></i>Logout</Link>
                                        </li>
                                    </ul>
                                </div>

                            )}


                        </form>
                    </div>
                </div>
            </nav>
        </>

    )
}

export default Navbar
