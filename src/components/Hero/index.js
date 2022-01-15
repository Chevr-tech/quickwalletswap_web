import React from "react";
import "../Hero/style.css";
import heroimg from "../../assets/images/phonetop.png";
import deviceimg from "../../assets/svg/device.svg";

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero-left">
          <div className="hero-title">Fast and Secure P2P Crypto exchange</div>
          <div className="hero-caption">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
            facilis quos earum iusto. Lorem ipsum dolor sit amet.
          </div>
          <div className="hero-cta">
            <p>Explore</p>
          </div>
        </div>
        <div className="hero-right">
          <img src={deviceimg} alt="phone image" />
        </div>
      </div>
    </>
  );
}

export default Hero;
