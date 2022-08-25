import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/login-page";
import Home from "./pages/home";
import Layout from "./components/layout";
import Index from "./pages/product";
import Register from "./pages/register-page";
import DetailProduct from "./pages/product-details";
import ProductDetails from "./pages/productdetails";
import Cart from "./pages/cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Layout children={<Home />} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/detailproduct"
              element={<Layout children={<DetailProduct />} />}
            />
            <Route
              path="/product/:productId"
              element={<Layout children={<ProductDetails />} />}
            />
            <Route exact path="/cart" element={<Cart />} />
            <Route path="/shop" element={<Layout children={<Index />} />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
