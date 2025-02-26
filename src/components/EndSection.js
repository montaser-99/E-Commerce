import React from 'react'

function EndSection() {
    return (
        <>
        <div className="container">
        <div className="row justify-content-center py-5 my-5">
          <div className="col-lg-4  d-flex flex-column justify-content-center align-items-center">
            <img src={`${process.env.PUBLIC_URL}/assets/Services.png`}></img>
            <h5 className='mt-4'>FREE AND FAST DELIVERY</h5>
            <p>Free delivery for all orders over $140</p>
          </div>
          <div className="col-lg-4 d-flex flex-column justify-content-center align-items-center">
            <img src={`${process.env.PUBLIC_URL}/assets/Services.png`}></img>
            <h5 className='mt-4'>24/7 CUSTOMER SERVICE</h5>
            <p>Friendly 24/7 customer support</p>
          </div>
          <div className="col-lg-4 d-flex flex-column justify-content-center align-items-center">
            <img src={`${process.env.PUBLIC_URL}/assets/Services.png`}></img>
            <h5 className='mt-4'>MONEY BACK GUARANTEE</h5>
            <p>We reurn money within 30 days</p>
          </div>
        </div>
      </div>
        </>
        
    )
}

export default EndSection