import React, { useState, useEffect } from "react";
import { auth, registerWithEmailAndPassword } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/login-form/cap-logo.svg";
import backGr from "../../assets/img/2.jpg";
import "./register.css";

const Register = () => {
  const [user, loading, error] = useAuthState(auth);
  const [dataRegister, setDataRegister] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  // State for the form

  // handle the form data
  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerWithEmailAndPassword(
      dataRegister.name,
      dataRegister.email,
      dataRegister.password
    );
    alert("User created successfully");
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
            <header>
              <p>CREATE - APPRECIATE - PERPETUATE</p>
            </header>
            <form action="#" id="myForm">
              <div className="field register-username">
                <span class="fa fa-user"></span>
                <input
                  type="text"
                  placeholder="Username"
                  onChange={(e) =>
                    setDataRegister({ ...dataRegister, name: e.target.value })
                  }
                />
              </div>
              <div className="field register-email">
                <span class="fa fa-envelope"></span>
                <input
                  type="email"
                  placeholder="Email"
                  onChange={(e) =>
                    setDataRegister({
                      ...dataRegister,
                      email: e.target.value,
                    })
                  }
                />
              </div>
              <div className="field register-space">
                <span className="fa fa-lock"></span>
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) =>
                    setDataRegister({
                      ...dataRegister,
                      password: e.target.value,
                    })
                  }
                />
              </div>
              <div className="field-buttons register">
                <button
                  type="submit"
                  className="btn-register"
                  onClick={(e) => handleSubmit(e, "register")}
                >
                  Register
                </button>
              </div>
            </form>
            <div className="loginlanding">
              <p>
                Already have an account?{"   "}
                <Link to="/login" className="loginbtn">
                  Click here
                </Link>
              </p>
            </div>
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

export default Register;
