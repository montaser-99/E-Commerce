import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';


function Acount() {
    return (
        <>
        <Navbar/>
        <div className='container'>
            <div className='row my-5 py-5 '>
                <div className=' col-md-4 col-sm-12 bg-white shadow p-3'>
                    <ul className='list-unstyled mt-2 list-left'>
                        <li className='fw-bold mb-2'>Manage My Account</li>
                        <li className='ps-3'>My Profile</li>
                        <li className='ps-3'>Address Book</li>
                        <li className='ps-3'>My Payment Options</li>
                    </ul>

                    <ul className='list-unstyled mt-2'>
                    <Link to={"/checkout"} className='fw-bold mb-2 text-decoration-none text-dark'>My Order</Link>
                        <li className='ps-3'>My Returns</li>
                        <li className='ps-3'>My Cancellations</li>
                    </ul>

                    <ul className='list-unstyled mt-2'>
                        <Link to={"/wishlist"} className='fw-bold mb-2 text-decoration-none text-dark'>My WishList</Link>
                    </ul>
                </div>

                <div className=' col-md-8 col-sm-12 bg-white shadow'>
                    <form class="row g-3 needs-validation" >
                        <h2 className='my-3'>Edit Your Profile</h2>
                        <div className=' row d-flex justify-content-between align-items-center gap-2 '>
                            <div className="col-md-5 col-sm-12 position-relative">
                                <label className="form-label">First name</label>
                                <input type="text" className="form-control bg-light" placeholder='md' />
                            </div>
                            <div className="col-md-5 col-sm-12 position-relative py-2">
                                <label className="form-label">Last Name</label>
                                <input type="text" className="form-control bg-light" placeholder='Rimel' />
                            </div>
                        </div>

                        <div className=' row d-flex justify-content-between align-items-center  py-2 '>
                            <div class="col-md-5 col-sm-12 position-relative">
                                <label for="validationTooltip01" class="form-label">Email</label>
                                <input type="text" class="form-control bg-light" placeholder='rimel1111@gmail.com' />
                            </div>
                            <div class="col-md-5 col-sm-12 position-relative py-2">
                                <label class="form-label">Address</label>
                                <div class="input-group has-validation">
                                    <input type="text" class="form-control bg-light" placeholder='Kingston, 5236, United State' />
                                    <div class="invalid-tooltip">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 py-2">
                            <h5 className='mb-3'>Password Changes</h5>
                            <input type="text" class="form-control bg-light" placeholder='Current Passwod' />
                        </div>
                        <div class="col-md-12 py-2">
                            <input type="text" class="form-control bg-light" placeholder='New Passwod' />
                        </div>
                        <div class="col-md-12 py-2">
                            <input type="text" class="form-control bg-light" placeholder='Confirm New Passwod' />
                        </div>
                        <div class="col-md-12 py-4 my-3">
                            <div className='d-flex justify-content-end gap-4'>
                            <button class="btn bg-light" type="submit">cancel</button>
                            <button class="btn-1" type="submit">Save Changes</button>
                           
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <Footer/>
       </>
    )
}

export default Acount
