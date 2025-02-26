import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar';

function Contact() {
    return (
        
        <>
        <Navbar/>
        <div className='container py-5 my-5'>
            <div className='row my-5 my-5 g-3' style={{height:"457px"}}>
                <div className='col-lg-4 col-md-4 cl-sm-12 bg-white shadow'>
                    <div className='d-flex  align-items-center'>
                        <img src={`${process.env.PUBLIC_URL}/assets/icons-phone.png`}></img>
                        <h2 className='ms-3'>Call To Us</h2>
                    </div>
                    <p className='my-3'>
                        We are available 24/7, 7 days a week.
                        Phone: +8801611112222
                    </p>
                    <hr></hr>
                    <div className='d-flex  align-items-center my-5'>
                        <img src={`${process.env.PUBLIC_URL}/assets/icons-mail.png`}></img>
                        <h2 className='ms-3'>Write To US</h2>
                    </div>
                    <p className='my-3'>
                        Fill out our form and we will contact you within 24 hours.
                        Emails: customer@exclusive.com
                        Emails: support@exclusive.com
                    </p>




                </div>
                <div className='col-lg-8 col-md-8 col-sm-12 shadow '>
                    <form class="row g-3">
                        <div class="col-md-4">
                            <input type="text" class="form-control bg-light" placeholder='Your Name *' />
                        </div>
                        <div class="col-md-4">
                            <input type="text" class="form-control bg-light" placeholder='Your Email *' />
                        </div>
                        <div class="col-md-4">
                            <div class="input-group">
                                <input type="text" class="form-control bg-light" placeholder='Your Phone *' />
                            </div>
                        </div>
                        <div class="input-group py-5" style={{ height: "207px" }}>
                            <textarea class="form-control bg-light" placeholder='Your Massage'></textarea>
                        </div>
                        <div class="col-12 d-flex justify-content-end">
                            <button class="btn-1" type="submit">Send Message</button>
                        </div>

                    </form>
                </div>
            </div>

        </div>
        <Footer/>
        </>
    )
}

export default Contact
