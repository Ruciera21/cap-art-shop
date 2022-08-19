import React from "react";
import LOGO from "../../../assets/login-form/cap-logo.svg";
import { Link } from "react-router-dom";

import { auth, db, logout } from "config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { query, collection, getDocs, where } from "firebase/firestore";

const Navbar = () => {
  return (
    <>
      <header>
        <nav>
          <div id="search-bar">
            <div className="search-container">
              <Link to="/" className="logo">
                <img src={LOGO} className="logo cap" alt="LOGO" />
              </Link>
              <form className="searchbar">
                <input
                  className="searchbar bar"
                  type="text"
                  placeholder="CAP search"
                  value=""
                />
              </form>
            </div>
          </div>
          <ul>
            <li className="nav-item gallery">
              <Link to="/" className="navbar-link" id="nav-link">
                Gallery
              </Link>
            </li>
            <li className="nav-item shop">
              <Link to="/shop" className="navbar-link" id="nav-link">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="navbar-link" id="nav-link">
                Sign in
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="navbar-link" id="nav-link">
                Sign up
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
