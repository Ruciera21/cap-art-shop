import { Link } from "react-router-dom";
// import Hero from "../../components/hero";
import React from "react";
// import { imgs } from "../../assets";
import "./hero.css";
// import AutoSlide from "../../components/hero/autoSlide";
import Logo from "../../assets/img/7.jpg";
import Logo1 from "../../assets/img/3.webp";
import Logo2 from "../../assets/img/4.jpg";
import Logo3 from "../../assets/img/6.jpg";
import Logo4 from "../../assets/img/8.jpg";
import Logo5 from "../../assets/img/9.jpg";
import Logo6 from "../../assets/img/10.jpg";

const Gallery = () => {
  return (
    <>
      <div className="slideshow-container">
        <div className="slides">
          <div className="mySlides fade">
            <img src={Logo} alt="" style={{ width: "100%" }} />
          </div>
          <div className="mySlides fade">
            <img src={Logo1} alt="" style={{ width: "100%" }} />
          </div>{" "}
          <div className="mySlides fade">
            <img src={Logo2} alt="" style={{ width: "100%" }} />
          </div>{" "}
          <div className="mySlides fade">
            <img src={Logo3} alt="" style={{ width: "100%" }} />
          </div>{" "}
          <div className="mySlides fade">
            <img src={Logo4} alt="" style={{ width: "100%" }} />
          </div>{" "}
          <div className="mySlides fade">
            <img src={Logo5} alt="" style={{ width: "100%" }} />
          </div>
          <div className="mySlides fade">
            <img src={Logo6} alt="" style={{ width: "100%" }} />
          </div>
          {/* <AutoSlide /> */}
        </div>
        <Link to="#" className="slide-button">
          Gallery
        </Link>
      </div>
    </>
  );
};

export default Gallery;
