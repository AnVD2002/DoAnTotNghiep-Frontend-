import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div class="hero">
      <div className="hero-left">
        <h2>NEW ARRAIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={`./images/hand_icon.png`} alt="" />
            <p>Collection</p>
            <p>For everyone</p>
          </div>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src="" alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={`./images/hero_image.png`} alt="" />
      </div>
    </div>
  );
};

export default Hero;
