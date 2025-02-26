import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    const [num, setNum] = useState(0);

    // Increment every second
    const add = () => {
        setNum((prevNum) => prevNum + 1);
    };

    useEffect(() => {
        const time = setInterval(add, 1000);
        return () => clearInterval(time);
    }, []);

    return (
        <div className="container hero-2 d-flex flex-column flex-lg-row justify-content-between align-items-center my-5" style={{ backgroundColor: "black" }}>
            <div className="col-12 col-lg-6 text-center text-lg-start">
                <h6 className="my-3" style={{ color: "#00FF66" }}>Categories</h6>
                <h2 className="text-white display-2 my-3">Enhance Your Furniture Experience</h2>
                <div className="d-flex justify-content-center justify-content-lg-start py-5">
                    {/* Days Circle */}
                    <div className="rounded-circle bg-light text-dark d-flex flex-column justify-content-center align-items-center mx-2" style={{ width: 80, height: 80 }}>
                        <div style={{ fontSize: "20px" }}>{Math.floor(num / 86400)}</div>
                        <div style={{ fontSize: "12px" }}>days</div>
                    </div>

                    {/* Hours Circle */}
                    <div className="rounded-circle bg-light text-dark d-flex flex-column justify-content-center align-items-center mx-2" style={{ width: 80, height: 80 }}>
                        <div style={{ fontSize: "20px" }}>{Math.floor((num % 86400) / 3600)}</div>
                        <div style={{ fontSize: "12px" }}>hrs</div>
                    </div>

                    {/* Minutes Circle */}
                    <div className="rounded-circle bg-light text-dark d-flex flex-column justify-content-center align-items-center mx-2" style={{ width: 80, height: 80 }}>
                        <div style={{ fontSize: "20px" }}>{Math.floor((num % 3600) / 60)}</div>
                        <div style={{ fontSize: "12px" }}>min</div>
                    </div>

                    {/* Seconds Circle */}
                    <div className="rounded-circle bg-light text-dark d-flex flex-column justify-content-center align-items-center mx-2" style={{ width: 80, height: 80 }}>
                        <div style={{ fontSize: "20px" }}>{num % 60}</div>
                        <div style={{ fontSize: "12px" }}>sec</div>
                    </div>
                </div>
                <div>
                    <Link to={"/product/14"} className="btn-2 text-decoration-none">Buy Now!</Link>
                </div>
            </div>

            <div className="col-12 col-lg-6 mt-4 mt-lg-0">
                <img src={`${process.env.PUBLIC_URL}/assets/Frame 694.jpg`} className="img-fluid w-100" alt="hero" />
            </div>
        </div>
    );
}

export default Hero;
