import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/pages/login-page/login-page.css";
import "./App.css";
import Login from "./pages/login-page";
import Home from "./pages/home";
import Layout from "./components/layout";
import Products from "./pages/product";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout children={<Home />} />} />
          <Route path="/login" element={<Layout children={<Login />} />} />
          <Route path="/shop" element={<Layout children={<Products />} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
