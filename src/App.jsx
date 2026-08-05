import React from "react";

import Navbar from "./Components/Navbar";
import ProductList from "./Pages/ProductList";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import ProductDetails from "./Pages/ProductDetails";
import Footer from "./Components/Footer";
import { ToastContainer, Zoom } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Zoom}
        />
        <div className="min-h-screen w-full bg-slate-900 text-white font-sans">
          <Navbar />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;