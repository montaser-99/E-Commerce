import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {HashRouter, Routes, Route} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Toaster } from "react-hot-toast";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import{ Home,Login,Register,Products,About,Category, Wishlist,Cart, Productdetails, Checkout,Contact, PageNotFound,Account} from './pages';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

   <HashRouter>
   <Provider store={store}>
   <Routes>
   <Route path="/" element={<Home/>} />
   <Route path="/login" element={<Login/>} />
   <Route path="/register" element={<Register/>} />
   <Route path="/products" element={<Products/>} />
   <Route path="/about" element={<About/>} />
   <Route path="/category/:cat" element={<Category/>} />
   <Route path="/wishlist" element={<Wishlist/>} />
   <Route path="/cart" element={<Cart/>} />
   <Route path="/product/:matchedid" element={<Productdetails />} />
   <Route path="/checkout" element={<Checkout />} />
   <Route path="/contact" element={<Contact />} />
   <Route path="/acount" element={<Account />} />
   <Route path="/*" element={<PageNotFound />} />


   </Routes>
  
  
   </Provider>
   <Toaster />
   </HashRouter>
 
);


