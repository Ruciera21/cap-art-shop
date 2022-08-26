import { Link } from "react-router-dom";
import React from "react";
import "./hero.css";
import { imgs } from "../../assets";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // req  uires a loader
import { Carousel } from "react-responsive-carousel";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HeroSlider = () => {
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

  const customMsg = () => (
    <div className="customMsg">
      <h2>Under Maintanance</h2>
      <p> Prepare for a surprise!</p>
    </div>
  );

  return (
    <>
      <div className="slideshow-container">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          interval={10000}
          infiniteLoop={true}
          animationHandler={"fade"}
          swipeable={false}
        >
          {/* <div className="mySlides fade"> */}
          <img src={imgs["5.jpeg"]} alt="" style={{}} />
          {/* </div> */}
          {/* <div className="mySlides fade"> */}
          <img src={imgs["10.jpg"]} alt="" />
          {/* </div> */}
          {/* <div className="mySlides fade"> */}
          <img src={imgs["7.jpg"]} alt="" />
          {/* </div> */}
        </Carousel>
        <div onClick={notify} className="slide-button">
          Gallery
        </div>
      </div>
    </>
  );
};

export default HeroSlider;
