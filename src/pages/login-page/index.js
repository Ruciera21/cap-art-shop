import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login-page.css";
import Logo from "../../assets/login-form/cap-logo.svg";
import backGr from "../../assets/img/2.jpg";
import { auth, logInWithEmailAndPassword } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
// import styled from "styled-components";

//

const Login = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    await logInWithEmailAndPassword(dataLogin.email, dataLogin.password);
  };

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate("/");
    if (error) alert(error);
  }, [loading, user, error, navigate]);

  return (
    <body className="login-landing-page">
      <div id="body-wrapper">
        {/* <!-- Background container --> */}
        <div className="img-container">
          {/* <div className="backgr"> */}
          <div className="bg-img">
            <img
              src={backGr}
              style={{
                position: "block",
                width: "100%",
              }}
              alt="background"
            ></img>
          </div>
        </div>

        {/* <!-- Login container  --> */}
        <div className="container">
          <div className="content">
            <Link to="/">
              <img
                src={Logo}
                type="catchphrase"
                alt="banner"
                style={{
                  display: "block",
                  height: "64px",
                  margin: "20px auto 0px",
                }}
              />
            </Link>
            <header>
              <p>CREATE - APPRECIATE - PERPETUATE</p>
            </header>
            <form action="#" id="myForm">
              <div className="field email">
                <span class="fa fa-user"></span>
                <input
                  type="text"
                  required
                  placeholder="Enter Email"
                  value={dataLogin.email}
                  onChange={(e) =>
                    setDataLogin({
                      ...dataLogin,
                      email: e.target.value,
                    })
                  }
                />
              </div>
              <div className="field space">
                <span className="fa fa-lock"></span>
                <input
                  type="password"
                  className="pass-key"
                  required
                  placeholder="Password"
                  // value={login.password}
                  onChange={(e) =>
                    setDataLogin({
                      ...dataLogin,
                      password: e.target.value,
                    })
                  }
                />
                {/* <span className="show">SHOW</span> */}
              </div>
              <div className="field-buttons">
                <button
                  className="field login"
                  type="submit"
                  height="40"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </div>
            </form>{" "}
            <div className="register">
              <p>
                Have no account yet? <Link to="/register"> Click here</Link>
              </p>
            </div>
            <div className="forget-pass">
              <Link to="#"> Forgot password? </Link>
            </div>
            {/* <!-- <div className="other-login-wrapper">
              <buttom className="field other-btn gmail">
                Continue with Google
              </buttom>
              <buttom className="field other-btn twitter">
                Continue with Twitter
              </buttom>
              <buttom className="field other-btn facebook">
                Continue with Facebook
              </buttom> --> */}
            {/* </div> */}
          </div>
        </div>
      </div>
      <footer id="footer-login">
        <div className="_footer-container-login">
          <div className="_footer-content-login">
            &copy;CAP - 2022. All Rights Reserved
          </div>
        </div>
      </footer>
    </body>
  );
};

export default Login;
