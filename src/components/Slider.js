import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export default function SimpleSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            {/* Slide 1 */}
            <div>
                <div className="card text-white mt-5 d-flex flex-row align-items-center" style={{ backgroundColor: "black", minHeight: "500px" }}>
                    <div className="p-4 w-100 w-md-50 text-center text-md-start">
                        <h5 className="card-title display-1 fw-semibold">Up to 10% off Voucher</h5>
                        <div style={{ width: "150px" }} className="mt-3">
                            <Link to={"/product/8"} className="text-decoration-none text-white">Shop Now <i className="fa-solid fa-arrow-right ms-2"></i></Link>
                            <hr />
                        </div>
                    </div>
                    <div className="w-100 h-100 d-flex justify-content-center">
                        <img src={`${process.env.PUBLIC_URL}/assets/hero2.jpg`} className="img-fluid w-100" alt="Slide 1" style={{ objectFit: "cover", height: "100%" }} />
                    </div>
                </div>
            </div>

            {/* Slide 2 */}
            <div>
                <div className="card text-white mt-5 d-flex flex-row align-items-center" style={{ backgroundColor: "black", minHeight: "500px" }}>
                    <div className="p-4 w-100 w-md-50 text-center text-md-start">
                        <h5 className="card-title display-1 fw-semibold">Up to 10% off Voucher</h5>
                        <div style={{ width: "150px" }} className="mt-3">
                            <Link to={"/product/7"} className="text-decoration-none text-white">Shop Now <i className="fa-solid fa-arrow-right ms-2"></i></Link>
                            <hr />
                        </div>
                    </div>
                    <div className="w-100 h-100 d-flex justify-content-center">
                        <img src={`${process.env.PUBLIC_URL}/assets/hero.jpg`} className="img-fluid w-100" alt="Slide 2" style={{ objectFit: "cover", height: "100%" }} />
                    </div>
                </div>
            </div>

            {/* Slide 3 */}
            <div>
                <div className="card text-white mt-5 d-flex flex-row align-items-center" style={{ backgroundColor: "black", minHeight: "500px" }}>
                    <div className="p-4 w-100 w-md-50 text-center text-md-start">
                        <h5 className="card-title display-1 fw-semibold">Up to 10% off Voucher</h5>
                        <div style={{ width: "150px" }} className="mt-3">
                            <Link to={"/product/6"} className="text-decoration-none text-white">Shop Now <i className="fa-solid fa-arrow-right ms-2"></i></Link>
                            <hr />
                        </div>
                    </div>
                    <div className="w-100 h-100 d-flex justify-content-center">
                        <img src={`${process.env.PUBLIC_URL}/assets/hero3.webp`} className="img-fluid w-100" alt="Slide 3" style={{ objectFit: "cover", height: "100%" }} />
                    </div>
                </div>
            </div>
        </Slider>
    );
}
