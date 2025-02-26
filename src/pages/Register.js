import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {  toast } from 'react-hot-toast';


function Register() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    //    ///////////////////
    const navigate = useNavigate();

    const handlesubmit = async (e) => {
        e.preventDefault()
        if (!name || !email || !password) { toast.error("please enter data") }
        else {
            localStorage.setItem("email", email)
            localStorage.setItem("password", password)
            toast.success(" Your registration has been successfully completed!")
            navigate("/login")
        }

    };


    return (
        <>
            <Navbar />
            <div className="container-fluid">


                <div className="row align-items-center min-vh-100 py-5 ">
                    <div className="col-lg-6 col-md-6 col-sm-12 text-center">
                        <img src={`${process.env.PUBLIC_URL}/assets/Side Image.png`} alt="" className='img-fluid w-100' />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12  d-flex  flex-column justify-content-center align-items-center">
                        <h2 className='display-1  mb-5 fw-semibold'>sign up</h2>
                        <form className='w-50'>
                            <div class="form my-3">
                                <label for="Name">Full Name</label>
                                <input
                                    type="email"
                                    class="form-control mt-1"
                                    id="Name"
                                    placeholder="Enter Your Name"
                                    onChange={(e) => { setName(e.target.value) }}
                                />
                            </div>
                            <div class="form my-3">
                                <label for="Email">Email address</label>
                                <input
                                    type="email"
                                    class="form-control mt-1"
                                    id="Email"
                                    placeholder="name@example.com"
                                    onChange={(e) => { setEmail(e.target.value) }}
                                />
                            </div>
                            <div class="form  my-3">
                                <label for="Password">Password</label>
                                <input
                                    type="password"
                                    class="form-control mt-1"
                                    id="Password"
                                    placeholder="Password"
                                    onChange={(e) => { setPassword(e.target.value) }}
                                />
                            </div>
                            <div className="my-3">
                                <p>Already has an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link> </p>
                            </div>
                            <div className="text-center d-flex flex-column justify-content-center align-items-center">
                                <button class="my-2 mx-auto btn-1 w-100" type="submit" onClick={handlesubmit}>
                                Create Account
                                </button>
                                <button class="my-2 mx-auto btn bg-white w-100  border " type="submit" >
                                <img src='/assets/Icon-Google.png' className='me-3'></img> Sign up with Google
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
            <Footer/>

        </>

    )
}

export default Register
