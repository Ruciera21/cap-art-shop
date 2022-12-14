import LOGO from "../../../assets/login-form/cap-logo.svg";
import { Link } from "react-router-dom";
import api from "../../../api";

import { auth, db, logout } from "../../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { query, collection, getDocs, where } from "firebase/firestore";
import React, { useCallback, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const [name, setName] = useState("");
  const [user] = useAuthState(auth);
  const [query, setQuery] = useState("");
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

  const notify = () => {
    toast(customMsg, {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const customMsg = ({ closeToast }) => (
    <div className="customMsg">
      <h2>Logout</h2>
      <p> Are you sure?</p>
      <div className="choices-container">
        <div className="okMsg">
          <button onClick={logout}>Sure</button>
        </div>
        <div className="cancelMsg">
          <button onClick={closeToast}>Cancel</button>{" "}
        </div>
      </div>
    </div>
  );

  const seer = () => {
    api
      .filter((post) => {
        if (query === "") {
          return post;
        } else if (
          post.productname.toLowerCase().includes(query.toLowerCase())
        ) {
          return post;
        }
      })
      .map((post, index) => (
        <div className="box" key={index}>
          <p>{post.title}</p>
          <p>{post.author}</p>
        </div>
      ));
  };

  return (
    <>
      <header>
        <nav role="navigation">
          <div id="search-bar">
            <div
              className="search-container"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
            >
              <Link to="/" className="logo">
                <img src={LOGO} className="logo cap" alt="LOGO" />
              </Link>
              <form className="searchbar">
                <input
                  className="form-control searchbar bar"
                  type="text"
                  placeholder="CAP search"
                />
                <button
                  type="submit"
                  class="btn btn-default"
                  style={{
                    marginLeft: "10px",
                    fontSize: "13px",
                    border: "1px solid",
                    borderColor: "black",
                    borderRadius: "100px",
                  }}
                  onChange={(event) => setQuery(event.target.value)}
                >
                  Look'up!
                </button>
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
                <button className="logout-btn" onClick={notify}>
                  {" "}
                  Log out{" "}
                </button>
                ??? <ToastContainer />
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
