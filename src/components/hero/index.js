// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import "./hero.css";
// import Logo from "../../assets/img/7.jpg";
// import Logo1 from "../../assets/img/3.webp";
// import Logo2 from "../../assets/img/4.jpg";
// import Logo3 from "../../assets/img/6.jpg";
// import Logo4 from "../../assets/img/8.jpg";
// import Logo5 from "../../assets/img/9.jpg";
// import Logo6 from "../../assets/img/10.jpg";
// import { render } from "@testing-library/react";

// const Gallery = () => {
//   const AutoSlide = () => {
//     let slideIndex = 0;
//     showSlides();

//     function showSlides() {
//       let i;
//       let slides = document.getElementsByClassName("mySlides");
//       for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//       }
//       slideIndex++;
//       if (slideIndex > slides.length) {
//         slideIndex = 1;
//       }
//       // slides[slideIndex - 1].style.display = "block";
//       slides[slideIndex - 1].style.display = "none";
//       setTimeout(showSlides, 10000); // Change image every 2 seconds
//     }
//   };
//   render();
//   return (
//     <>
//       <div className="slideshow-container">
//         <div className="slides">
//           <div className="mySlides fade">
//             <img loading="lazy" src={Logo} alt="" style={{ width: "100%" }} />
//           </div>
//           <div className="mySlides fade">
//             <img loading="lazy" src={Logo1} alt="" style={{ width: "100%" }} />
//           </div>
//           <div className="mySlides fade">
//             <img loading="lazy" src={Logo2} alt="" style={{ width: "100%" }} />
//           </div>
//           <div className="mySlides fade">
//             <img loading="lazy" src={Logo3} alt="" style={{ width: "100%" }} />
//           </div>
//           <div className="mySlides fade">
//             <img loading="lazy" src={Logo4} alt="" style={{ width: "100%" }} />
//           </div>{" "}
//           <div className="mySlides fade">
//             <img src={Logo5} alt="" style={{ width: "100%" }} />
//           </div>
//           <div loading="lazy" className="mySlides fade">
//             <img src={Logo6} alt="" style={{ width: "100%" }} />
//           </div>
//           <AutoSlide />
//         </div>
//         <Link to="#" className="slide-button">
//           Gallery
//         </Link>
//       </div>
//     </>
//   );
// };
// export default Gallery;
