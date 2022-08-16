import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section>
      {/* <!-- Slideshow container --> */}
      <div classNameName="slideshow-container">
        {/* <!-- Full-width images with number and caption text --> */}
        <div classNameName="slides">
          <div className="mySlides first fade">
            <div className="numbertext">1</div>
            <img
              src="../src/assets/img/1.jpg"
              style={{ width: "100%" }}
              alt="Hokusei"
            />
            {/* <!-- <div className="text">Katsushika Hokusei</div> --> */}
          </div>

          <div className="mySlides fade">
            <div className="numbertext">2</div>
            <img
              src="../src/assets/img/7.jpg"
              style={{ width: "100%" }}
              alt="Mai"
            />
            {/* <!-- <div className="text">Yoneyama Mai</div> --> */}
          </div>

          <div className="mySlides fade">
            <div className="numbertext">3</div>
            <img
              src="../src/assets/img/3.webp"
              style={{ width: "100%" }}
              alt=""
            />
          </div>

          <div className="mySlides fade">
            <div className="numbertext">4</div>
            <img
              src="../src/assets/img/4.jpg"
              style={{ width: "100%" }}
              alt=""
            />
          </div>

          <div className="mySlides fade">
            <div className="numbertext">5</div>
            <img
              src="../src/assets/img/5.jpeg"
              style={{ width: "100%" }}
              alt=""
            />
          </div>

          <div className="mySlides fade">
            <div className="numbertext">6</div>
            <img
              src="../src/assets/img/6.jpg"
              style={{ width: "100%" }}
              alt=""
            />
          </div>

          <div className="mySlides fade">
            <div className="numbertext">7</div>
            <img
              src="../src/assets/img/8.jpg"
              style={{ width: "100%" }}
              alt=""
            />
          </div>

          <div className="mySlides fade">
            <div className="numbertext">8</div>
            <img
              src="../src/assets/img/9.jpg"
              style={{ width: "100%" }}
              alt=""
            />
          </div>

          <div className="mySlides fade">
            <div className="numbertext">9</div>
            <img
              src="../src/assets/img/10.jpg"
              style={{ width: "100%" }}
              alt=""
            />
          </div>

          <Link to="#" className="slide-button">
            Gallery
          </Link>
        </div>
      </div>
      <br />
    </section>
  );
};

export default HeroSection;
