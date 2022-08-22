import LOGO from "../../../assets/login-form/cap-logo.svg";
import { Link } from "react-router-dom";

import { auth, db, logout } from "../../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { query, collection, getDocs, where } from "firebase/firestore";
import React, { useCallback, useEffect, useState } from "react";

const Navbar = () => {
  const [name, setName] = useState("");
  const [user] = useAuthState(auth);
  // const location = useLocation();

  // const fetchUserName = useCallback(async () => {
  //   try {
  //     const q = query(collection(db, "users"), where("uid", "==", user?.uid));
  //     const doc = await getDocs(q);
  //     const data = doc.docs[0].data();
  //     setName(data.name);
  //   } catch (err) {
  //     console.error(err);
  //     alert("An error occured while fetching user data");
  //   }
  // }, [user]);

  // useEffect(() => {
  //   if (user) {
  //     fetchUserName();
  //   }
  // }, [user, fetchUserName]);

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
            {user ? (
              <li className="nav-item shop">
                <Link
                  to="/cart"
                  className="fa fa-paint-brush navbar-link"
                  id="nav-link"
                >
                  Cart
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link to="/login" className="navbar-link" id="nav-link">
                  Sign in
                </Link>
              </li>
            )}
            {user ? (
              <li className="nav-item">
                <div onClick={logout}> Log out </div>
              </li>
            ) : (
              <li className="nav-item">
                <Link to="/register" className="navbar-link" id="nav-link">
                  Sign up
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
