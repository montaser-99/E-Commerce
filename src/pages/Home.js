import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts, setFilter1, setFilter2 } from '../redux/actions/ProductActions.js';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar';
import SimpleSlider from '../components/Slider';
import { Link } from 'react-router-dom';
import Hero from '../components/hero.js';
import FlashSales from '../components/flash.js';
import BestSellingProducts from '../components/best.js';
// import { addToWishlist } from "../redux/actions/WishlistActions.js";
// import { addCart } from '../redux/actions/CartActions.js';
import EndSection from '../components/EndSection.js';
import { useNavigate } from 'react-router-dom';
import useAddToCart from "../components/handle authontication.js";
import useAddTowishlist from '../components/wishlist-auth.js';





const Home = () => {
  const addToCart = useAddToCart();
  const addToWishlist = useAddTowishlist()
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const filter1 = useSelector((state) => state.products.filter1);
  const filter2 = useSelector((state) => state.products.filter2);




  // Fetch products
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        dispatch(setProducts(data.products));
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    getProducts();
  }, [dispatch]);

  // Filter products
  useEffect(() => {
    if (products.length > 0) {
      handleFilter1();
      handleFilter2();
    }
  }, [products]);
  fetch('https://dummyjson.com/products/categories')
    .then(res => res.json())
    .then(categories => console.log(categories));



  const handleFilter1 = () => {
    const flashProducts = products.filter(
      (item) => item.discountPercentage > 10
    );
    dispatch(setFilter1(flashProducts));
  };

  const handleFilter2 = () => {
    const bestSelling = products.filter(
      (item) => item.rating > 4
    );
    dispatch(setFilter2(bestSelling));
  };

  return (
    <>
      <Navbar />
      {/* MAIN */}
      <div className="container">
        <div className="row  d-flex flex-wrap align-items-stretch">
          {/* Sidebar */}
          <div className="sidebar border-end   text-start col-lg-2 col-md-3 col-sm-12 mb-4 mb-md-0 d-flex flex-column">
            <ul className="list-unstyled flex-grow-1 mt-5">
              <li className="my-4 py-4">
                <Link className="text-decoration-none text-dark" to="/category/beauty">
                  Beauty <i className="fa-solid fa-arrow-right ms-2"></i>
                </Link>
              </li>
              <li className="my-4 py-4">
                <Link className="text-decoration-none text-dark" to="/category/fragrances">
                  Fragrances <i className="fa-solid fa-arrow-right ms-2"></i>
                </Link>
              </li>
              <li className="my-4 py-4">
                <Link className="text-decoration-none text-dark" to="/category/furniture">
                  Furniture <i className="fa-solid fa-arrow-right ms-2"></i>
                </Link>
              </li>
              <li className="my-4 py-4">
                <Link className="text-decoration-none text-dark" to="/category/groceries">
                  Groceries <i className="fa-solid fa-arrow-right ms-2"></i>
                </Link>
              </li>
            </ul>
          </div>

          {/* Slider */}
          <div className="col-lg-10 col-md-9 col-sm-12 d-flex">
            <div className="w-100" style={{ height: "500px", overflow: "hidden" }}>
              <SimpleSlider />
            </div>
          </div>
        </div>
      </div>

      {/* Flash Sales Section */}
      <FlashSales filter1={filter1} />


      {/* Browse By Category Section */}
      <section>
        <div className="container my-5">
          <div className="header">
            <div className='d-flex bg-light align-items-center' style={{ width: "136px" }}>
              <div className='' style={{ width: "20px", height: "40px", backgroundColor: "#DB4444", borderRadius: "30px" }}></div>
              <h5 className='ms-3' style={{ color: "#DB4444" }}>Categories</h5>
            </div>
            <h2 className='mt-3 fw-bold'>Browse By Category</h2>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-4">
            <Link to="/category/beauty" className="col text-decoration-none text-dark ">
              <div className="border d-flex flex-column justify-content-center align-items-center gap-2 category-div" style={{ height: 145 }}>
                <img src={`${process.env.PUBLIC_URL}/assets/makeover.png`} alt="beauty" className='img-fluid' style={{ height: "56px" }} />
                <h5>beauty</h5>
              </div>
            </Link>

            <Link to="/category/furniture" className="col text-decoration-none text-dark">
              <div className="border d-flex flex-column justify-content-center align-items-center gap-2 category-div" style={{ height: 145 }}>
                <img src={`${process.env.PUBLIC_URL}/assets/armchair.png`} alt="furniture" className='img-fluid' style={{ height: "56px" }} />
                <h5>furniture</h5>
              </div>
            </Link>

            <Link to="/category/groceries" className="col text-decoration-none text-dark">
              <div className="border d-flex flex-column justify-content-center align-items-center gap-2 category-div" style={{ height: 145 }}>
                <img src={`${process.env.PUBLIC_URL}/assets/supermarket.png`} alt="groceries" className='img-fluid' style={{ height: "56px" }} />
                <h5>groceries</h5>
              </div>
            </Link>

            <Link to="/category/fragrances" className="col text-decoration-none text-dark">
              <div className="border d-flex flex-column justify-content-center align-items-center gap-2 category-div" style={{ height: 145 }}>
                <img src={`${process.env.PUBLIC_URL}/assets/perfume.png`} alt="fragrances" className='img-fluid' style={{ height: "56px" }} />
                <h5>fragrances</h5>
              </div>
            </Link>
          </div>

          <hr />
        </div>
      </section>

      {/* Best Selling Products Section */}
      <BestSellingProducts filter2={filter2} />


      {/*  */}



      <section>
        <Hero />
        <div className="container py-5 my-5">
          <div className='d-flex bg-light align-items-center' style={{ width: "186px" }}>
            <div style={{ width: "20px", height: "40px", backgroundColor: "#DB4444", borderRadius: "30px" }}></div>
            <h5 className='ms-3' style={{ color: "#DB4444" }}>our products</h5>
          </div>
          <div className="header">
            <h2 className='py-4 mb-3 fw-bold'>Explore Our Products</h2>
          </div>
          <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 ">
            {Array.isArray(products) &&
              products.slice(0, 8).map((item) => {
                // const handleAddToCart = (event) => {
                //   event.stopPropagation();
                //   console.log("Adding to cart:", item);
                //   dispatch(addCart(item));
                // };

                return (
                  <div className=''>
                    <div className="col" key={item.id}>
                      <div className="card  hover-card h-100 mb-4 " style={{ position: "relative" }}>
                        <div className="img-div">
                          <img src={item.thumbnail} className="card-img-top" alt={item.title} />
                          {/* Add to Cart button (FIXED) */}
                          <button
                            onClick={() => addToCart(item)} // Show toast


                            className='w-100 btn-add-cart'
                          >
                            Add to Cart
                          </button>

                        </div>
                        <div className="card-img-overlay d-flex justify-content-between">
                          <div className=" text-white text-center" style={{ height: "26px", width: "55px", background: "#DB4444" }}>
                            -{Math.floor(item.discountPercentage)}%
                          </div>
                          <div className="text-dark text-center d-flex flex-column justify-content-between" style={{ height: "46px", width: "55px" }}>
                            <button
                              onClick={() => addToWishlist(item)}
                              className='bg-white rounded-circle fav-icon'
                              style={{ border: "none" }}
                            >
                              <i className="fa-regular fa-heart"></i>
                            </button>

                            <Link className='rounded-circle bg-white text-decoration-none text-dark' to={"/product/" + item.id}><i className="fa-regular fa-eye"></i></Link>

                          </div>
                        </div>
                        <div className="card-body">
                          <p className="card-text flex-grow-1">{item.title}</p>
                          <span className="text-decoration-line-through fw-semibold">${Math.floor(item.price)}</span> <span className='ms-3 fw-semibold'>${Math.floor(item.price - (item.price * item.discountPercentage / 100))}</span>
                          <div className="stars">
                            {Array.from({ length: 5 }).map((_, index) => (
                              <span key={index} style={{ color: index < Math.floor(item.rating) ? "gold" : "gray" }}>
                                ★
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="text-center my-5">
            <Link className="btn-1 text-decoration-none" to="/products">View All Products</Link>
          </div>
          <hr />
        </div>
      </section>


      {/* /////////////////////////////////////// */}
      {/* section New arival */}


      <div className="container">
        <div className='d-flex bg-light align-items-center' style={{ width: "136px" }}>
          <div style={{ width: "20px", height: "40px", backgroundColor: "#DB4444", borderRadius: "30px" }}></div>
          <h5 className='ms-3' style={{ color: "#DB4444" }}>Featured</h5>
        </div>
        <div className="header d-flex justify-content-between py-3 my-3">
          <h2 className="fw-bold">New Arrival</h2>
        </div>
        <div className="row py-5 my-5">
          <div className="col-12 col-md-6" style={{ backgroundColor: "black" }}>
            <div className="card text-white h-100 d-flex flex-column" style={{ backgroundColor: "black" }}>
              <img src={`${process.env.PUBLIC_URL}/assets/new4.png`} className="card-img h-100" alt="..." />
              <div className="card-img-overlay d-flex flex-column justify-content-end">
                <h5 className="card-title ">PlayStation 5</h5>
                <p className="card-text">
                  Black and White version of the PS5 coming out on sale.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6" style={{ backgroundColor: "black" }}>
            <div className="card bg-dark text-white">
              <img src={`${process.env.PUBLIC_URL}/assets/new3.png`} className="card-img" alt="..." />
              <div className="card-img-overlay  d-flex flex-column justify-content-end">
                <h5 className="card-title">Women’s Collections</h5>
                <p className="card-text">
                  Featured woman collections that give you another vibe.
                </p>
              </div>
            </div>

            <div className="d-md-flex gap-1 mt-3">
              <div className="col-12 col-md-6">
                <div className="card text-white" style={{ backgroundColor: "black" }}>
                  <img src={`${process.env.PUBLIC_URL} /assets/new2.png`} className="card-img" alt="..." />
                  <div className="card-img-overlay  d-flex flex-column justify-content-end">
                    <h5 className="card-title">Speakers</h5>
                    <p className="card-text">Amazon wireless speakers</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="card text-white" style={{ backgroundColor: "black" }}>
                  <img src={`${process.env.PUBLIC_URL}/assets/new1.png`} className="card-img" alt="..." />

                  <div className="card-img-overlay  d-flex flex-column justify-content-end">
                    <h5 className="card-title">Perfume</h5>
                    <p className="card-text">GUCCI INTENSE OUD EDP</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* end-section */}

      {/* /////////////////////////// */}
      <EndSection />



      <Footer />






    </>
  );
};

export default Home;
