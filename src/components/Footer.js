import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <footer className=' footer text-white  mt-auto' >
            <div className='container'>
                <div className='row  row-cols-lg-5   row-cols-sm-3 py-5 '>
                    <div className='col mb-4 '>
                        <ul className='list-unstyled'>
                            <li className='fw-bold mb-2 fs-5'>Exclusive</li>
                            <li className='mb-2'>Subscribe</li>
                            <li className='mb-2'>Get 10% off your first order</li>
                            <input placeholder='Enter your email' className='border  bg-dark text-white'></input>
                        </ul>
                    </div>
                    <div className='col mb-4'>
                        <ul className='list-unstyled'>
                            <li className='fw-bold mb-3 fs-5'>support</li>
                            <li className='mb-2'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
                            <li className='mb-2'>exclusive@gmail.com</li>
                            <li className='mb-2'>+88015-88888-9999</li>
                        </ul>

                    </div>
                    <div className='col mb-4'>
                        <ul className='list-unstyled' >
                            <li className='fw-bold mb-3 fs-5'>Account</li>
                            <li className='mb-2'><Link className="text-decoration-none text-white" to={"/acount"}>My Account</Link></li>
                            <li className='mb-2'><Link className="text-decoration-none text-white" to={"/login"}>login</Link> / <Link className="text-decoration-none text-white" to={"/register"}>register</Link></li>
                            <li className='mb-2'><Link className="text-decoration-none text-white" to={"/cart"}>Cart</Link></li>
                            <li className='mb-2'><Link className="text-decoration-none text-white" to={"/whishlist"}>Wishlist</Link></li>
                            <li className='mb-2'><Link className="text-decoration-none text-white" to={"/"}>shop</Link></li>
                        </ul>


                    </div>
                    <div className='col mb-4'>
                        <ul className='list-unstyled'>
                            <li className='fw-bold fs-5 mb-3'>Quick Link</li>
                            <li className='mb-2'>Privacy Policy</li>
                            <li className='mb-2'  >FAQ</li>
                            <li className='mb-2'><Link className="text-decoration-none text-white" to={"/contact"}>Contact</Link></li>

                        </ul>


                    </div>
                    <div className='col mb-4'>
                        <ul className='list-unstyled'>
                            <li className='fw-bold fs-5 mb-3'>Download App</li>
                            <div className='row gap-3'>
                                <div className='col-4'>
                                    <img src={`${process.env.PUBLIC_URL}/assets/Qrcode 1.png`}></img>
                                </div>
                                <div className='col-6 d-flex flex-column gap-2'>
                                    <div className=''>
                                        <img src={`${process.env.PUBLIC_URL}/assets/png-transparent-google-play-.png`}></img>
                                    </div>
                                    <div>
                                        <img src={`${process.env.PUBLIC_URL}/assets/AppStore.png`}></img>
                                    </div>

                                </div>
                                <ul className='d-flex list-unstyled mt-3 justify-content-around '>
                                    <li><i class="fa-brands fa-facebook-f"></i></li>
                                    <li><i class="fa-brands fa-square-twitter"></i></li>
                                    <li><i class="fa-brands fa-instagram"></i></li>
                                    <li><i class="fa-brands fa-linkedin-in"></i></li>
                                </ul>

                            </div>
                        </ul>


                    </div>

                </div>
                <div className='row'>
                    <div className='col-12 text-light text-center py-4 my-4'>
                        © Rimel 2022. All Rights Reserved.
                    </div>
                </div>


            </div>
        </footer>
    )
}

export default Footer