import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import Footer from '../components/Footer';
import { toast } from 'react-hot-toast';
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const storedEmail = localStorage.getItem("email");
        const storedPassword = localStorage.getItem("password");

        if (email.trim() === "" || password.trim() === "") {
            toast.error("please enter email and password");
            return;
        }

        if (
            storedEmail &&
            storedEmail.trim() === email.trim() &&
            storedPassword &&
            storedPassword.trim() === password.trim()
        ) {
            setTimeout(() => {
                localStorage.setItem("isLoggedIn", JSON.stringify(true));
                toast.success("login successfully");

                navigate("/");
            }, 1500);
        } else {
            toast.error("Invalid email or password");
        }
    };

    return (
        <>
            <Navbar />

            <div className="container-fluid">
                <div className="row align-items-center min-vh-100 py-5">

                    <div className="col-lg-7 col-md-7 col-sm-12 text-center">
                        <img src={`${process.env.PUBLIC_URL}/assets/Side Image.png`} alt="Login Visual" className="img-fluid" />
                    </div>


                    <div className="col-lg-4 col-md-4 col-sm-12 ">

                        <form className="d-flex flex-column  ">
                            <h2 className="display-4 mb-5 fw-semibold ">Log in to Exclusive</h2>
                            <span>Enter your details below</span>

                            <div className="form-group my-3">

                                <input
                                    type="email"
                                    style={{ outline: "none", boxShadow: "none", border: "none" }}
                                    className="form-control mt-1"
                                    id="Email"
                                    placeholder="name@example.com"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <hr></hr>
                            </div>
                            <div className="form-group my-3">

                                <input
                                    type="password"
                                    className="form-control mt-1"
                                    style={{ outline: "none", boxShadow: "none", border: "none" }}
                                    id="Password"
                                    placeholder="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <hr></hr>
                            </div>
                            <div className="my-3 text-center">
                                <p>
                                    Don't have an account?{" "}
                                    <Link to="/register" className="text-decoration-underline text-info">
                                        Register
                                    </Link>
                                </p>
                            </div>
                            <div className="text-center d-flex justify-content-between align-items-center w-100">
                                <button class="my-2  btn-1 " type="submit" onClick={handleLogin}>
                                Log In
                                </button>
                                <Link className="text-decoration-none" style={{color:"#DB4444"}}>Forget Password?</Link>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Login;
