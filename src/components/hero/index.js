import { Link } from "react-router-dom";
import React from "react";
import "./hero.css";
import { imgs } from "../../assets";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // req  uires a loader
import { Carousel } from "react-responsive-carousel";

const HeroSlider = () => {
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
        <Link to="#" className="slide-button">
          Gallery
        </Link>
      </div>
    </>
  );
};

export default HeroSlider;
