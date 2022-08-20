import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/login-page";
import Home from "./pages/home";
import Layout from "./components/layout";
import Products from "./pages/product";
import Register from "./pages/register-page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout children={<Home />} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/shop" element={<Layout children={<Products />} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
