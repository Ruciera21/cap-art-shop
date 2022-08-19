import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import "./hero.css";
import { imgs } from "../../assets";

const HeroSlider = () => {
  const AutoSlide = () => {
    useEffect(() => {
      let slideIndex = 0;
      showSlides();

      function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
          slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 10000); // Change image every 2 seconds
      }
    });
  };

  return (
    <>
      <div className="slideshow-container">
        <div className="slides">
          <div className="mySlides fade">
            <img src={imgs["4.jpg"]} alt="" style={{ width: "100%" }} />
          </div>
          <div className="mySlides fade">
            <img src={imgs["6.jpg"]} alt="" style={{ width: "100%" }} />
          </div>
          <div className="mySlides fade">
            <img src={imgs["7.jpg"]} alt="" style={{ width: "100%" }} />
          </div>
          <AutoSlide />
        </div>
        <Link to="#" className="slide-button">
          Gallery
        </Link>
      </div>
    </>
  );
};

export default HeroSlider;
