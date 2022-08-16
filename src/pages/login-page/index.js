import React from "react";
import { Link } from "react-router-dom";
import "./login-page.css";
import Logo from "../../assets/login-form/cap-logo.svg";
import Footer from "../../components/layout/footer";

//

const Login = () => {
  return (
    <body className="login-landing-page">
      <div id="body-wrapper">
        {/* <!-- Background container --> */}
        <div className="img-container">
          <div className="backgr">
            <div className="bg-img"></div>
          </div>
        </div>

        {/* <!-- Login container  --> */}
        <div className="container">
          <div className="content">
            <img
              src={Logo}
              type="catchphrase"
              alt="banner"
              style={{
                display: "block",
                height: "64px",
                margin: "64px auto 0px",
              }}
            />
            <header>CREATE - APPRECIATE - PERPETUATE</header>
            <form action="#" id="myForm" onsubmit="setValue(); return false">
              <div className="field email">
                <span class="fa fa-user"></span>
                <input
                  type="text"
                  required
                  placeholder="Enter Email"
                  value=""
                />
              </div>
              <div className="field space">
                <span className="fa fa-lock"></span>
                <input
                  type="password"
                  className="pass-key"
                  required
                  placeholder="Password"
                />
                {/* <span className="show">SHOW</span> */}
              </div>
              <div className="field-buttons">
                <button
                  className="field manual login"
                  type="submit"
                  height="40"
                >
                  Login
                </button>
                <button
                  className="field manual register"
                  type="submit"
                  height="40"
                >
                  Register
                </button>
              </div>
            </form>
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
      <Footer />
    </body>
  );
};

export default Login;