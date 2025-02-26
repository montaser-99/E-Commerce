import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


function PageNotFound() {
    return (
        <>
        <Navbar/>
        <div className='container vh-100 d-flex flex-column justify-content-center align-items-center text-center'>
            <h2 className='display-1 fw-bold'>404 Not Found</h2>
            <p>Your visited page was not found. You may go to the home page.</p>
            <Link to="/" className='btn-1  text-decoration-none mt-3'>
                Back to Home Page
            </Link>
        </div>
        <Footer/>
        </>
    );
}

export default PageNotFound;
