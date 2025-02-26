import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar';

function Checkout() {
    const cart = JSON.parse(localStorage.getItem("cart"))
    const total = JSON.parse(localStorage.getItem("total"))
    const shipping = JSON.parse(localStorage.getItem("shipping"))
    const subtotal = JSON.parse(localStorage.getItem("subtotal"))
    return (
        <>
        <Navbar/>
            <div className='container'>
                <div className='row d-flex align-items-start'>
                    {/* Left Side - Billing Form */}
                    <div className='col-lg-6 py-5'>
                        <form>
                            <h2 className='my-5 fs-1 fw-semibold'>Billing Details</h2>
                            <fieldset>
                                {["First Name*", "Company Name", "Street Address*", "Apartment, floor, etc. (optional)", "Town/City*", "Phone Number*", "Email Address*"].map((label, index) => (
                                    <div className="mb-3" key={index}>
                                        <label className="form-label">{label}</label>
                                        <input type="text" className="form-control bg-light" style={{ outline: 'none', boxShadow: 'none' }} />
                                    </div>
                                ))}
                                <div className="form-check mb-3">
                                    <input className="form-check-input" type="checkbox" id="saveInfo" />
                                    <label className="form-check-label" htmlFor="saveInfo">
                                        Save this information for faster check-out next time
                                    </label>
                                </div>
                            </fieldset>
                        </form>
                    </div>


                    <div className='col-lg-5 mx-auto py-5'>
                        <div className="border rounded p-4 shadow-sm my-5">
                            <h2 className='mb-4 fs-3'>Your Order</h2>

                            {cart.map((item) => (
                                <div key={item.id} className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="d-flex align-items-center gap-3">
                                        <img src={item.thumbnail} alt={item.title} style={{ height: "54px", width: "54px" }} className="rounded" />
                                        <span>{item.title} ({item.qty})</span>
                                    </div>
                                    <p className="mb-0">${Math.floor(item.price)}</p>
                                </div>
                            ))}


                            <hr />
                            <div className="d-flex justify-content-between">
                                <p>Subtotal:</p>
                                <p>${Math.floor(subtotal)}</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p>Shipping:</p>
                                <p>${shipping}</p>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between fw-bold fs-5">
                                <p>Total:</p>
                                <p>${Math.floor(total)}</p>
                            </div>

                            {/* Checkout Button */}
                            <div class="form-check">
                                <input className="form-check-input custom-checkbox" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label class="form-check-label" for="flexRadioDefault1">
                                    Bank
                                    </label>
                                    <img src={`${process.env.PUBLIC_URL}/assets/image 30.png`} className='img-fluid ms-2'></img>
                                    <img src={`${process.env.PUBLIC_URL}/assets/image 31.png`}className='img-fluid ms-2'></img>
                                    <img src={`${process.env.PUBLIC_URL}/assets/image 32.png`}className='img-fluid ms-2'></img>
                                    <img src={`${process.env.PUBLIC_URL}/assets/image 33.png`}className='img-fluid ms-2'></img>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                    <label class="form-check-label" for="flexRadioDefault2">
                                    Cash on deliveryo
                                    </label>
                                    
                            </div>
                            
                            <div className="my-4 d-flex justify-content-center">
                                <input className="form-control " placeholder="Enter coupon" />
                                <button className="btn-1 text-white mx-2 w-100">Apply Coupon</button>
                            </div>
                            <button type="submit" class=" btn-1 mt-4">place order</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>

        </>
    )
}

export default Checkout
