import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import EndSection from "../components/EndSection";

function About() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
    appendDots: dots => (
      <div style={{ marginTop: "20px" }}>
        <ul style={{ display: "flex", justifyContent: "center", padding: 0 }}>{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          backgroundColor: "#888",
          margin: "20px 5px",
        }}
      ></div>
    ),
  };

  return (
    <>
      <Navbar />
      <div className='container-fluid'>
        <div className='row row-cols-1 row-cols-md-2 py-5'>
          <div className='col fs-4'>
            <h2 className='ms-5 display-5 fw-bold'>Our Story</h2>
            <p className='ms-5 my-5'>
              Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.
              Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.
            </p>
            <p className="ms-5 mt-5">
              Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging from consumer.
            </p>
          </div>

          <div className='col'>
            <img src={`${process.env.PUBLIC_URL}/assets/Side Image2.png`} className='w-100 img-fluid' alt="Our Story" />
          </div>
        </div>


        <div className="container py-5 my-5">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-4">
            <div className="col">
              <div className="d-flex flex-column justify-content-center align-items-center about-div border" style={{ height: 230 }}>
                <img src={`${process.env.PUBLIC_URL}/assets/Services (6).png`} alt="Sellers Icon" />
                <h5 className="mt-4">10.5k</h5>
                <p>Sellers active on our site</p>
              </div>
            </div>

            <div className="col">
              <div className="d-flex flex-column justify-content-center align-items-center about-div border" style={{ height: 230 }}>
                <img src={`${process.env.PUBLIC_URL}/assets/Services.png`} alt="Monthly Sales Icon" />
                <h5 className="mt-4">33k</h5>
                <p>Monthly Product Sale</p>
              </div>
            </div>

            <div className="col">
              <div className="d-flex flex-column justify-content-center align-items-center about-div border" style={{ height: 230 }}>
                <img src={`${process.env.PUBLIC_URL}/assets/Services (5).png`} alt="Customers Icon" />
                <h5 className="mt-4">45.5k</h5>
                <p>Customers active on our site</p>
              </div>
            </div>

            <div className="col">
              <div className="d-flex flex-column justify-content-center align-items-center about-div border" style={{ height: 230 }}>
                <img src={`${process.env.PUBLIC_URL}/assets/Services (4).png`}alt="Annual Sales Icon" />
                <h5 className="mt-4">25k</h5>
                <p>Annual Gross Sale on Our Site</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ====== Team Slider ====== */}
      <div className="container py-5">
        <Slider {...settings}>
          {/* Slide 1 */}
          <div className="px-2 h-100">
            <div className="card h-100 d-flex flex-column justify-content-between">
              <img src={`${process.env.PUBLIC_URL}/assets/image 46.png`} className="card-img-top img-fluid" alt="Tom Cruise" style={{ height: '380px' }} />
              <div className="card-body text-start">
                <h5 className="card-title fw-semibold">Tom Cruise</h5>
                <p className="card-text">Founder & Chairman</p>
                <div>
                  <i className="fa-brands fa-square-twitter me-2"></i>
                  <i className="fa-brands fa-instagram me-2"></i>
                  <i className="fa-brands fa-linkedin-in"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="px-2 h-100">
            <div className="card h-100 d-flex flex-column justify-content-between">
              <img src={`${process.env.PUBLIC_URL}/assets/image 47.png`} className="card-img-top img-fluid" alt="Emma Watson" style={{ height: '380px' }} />
              <div className="card-body text-start">
                <h5 className="card-title fw-semibold">Will Smith</h5>
                <p className="card-text">Managing Director</p>
                <div>
                  <i className="fa-brands fa-square-twitter me-2"></i>
                  <i className="fa-brands fa-instagram me-2"></i>
                  <i className="fa-brands fa-linkedin-in"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="px-2 h-100">
            <div className="card h-100 d-flex flex-column justify-content-between">
              <img src={`${process.env.PUBLIC_URL}/assets/image 51.png`} className="card-img-top img-fluid" alt="Will Smith" style={{ height: '380px' }} />
              <div className="card-body text-start">
                <h5 className="card-title fw-semibold">Emma Watson</h5>
                <p className="card-text">Product Designer</p>
                <div>
                  <i className="fa-brands fa-square-twitter me-2"></i>
                  <i className="fa-brands fa-instagram me-2"></i>
                  <i className="fa-brands fa-linkedin-in"></i>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <EndSection />

      <Footer />
    </>
  );
}

export default About;
