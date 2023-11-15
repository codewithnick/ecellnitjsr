import React from "react";
import "../styles/HeroSection.css";

import rightimg from "../images/banner-image.png";
// import bgimg1 from '../images/whiteimg3.jpg'
// import bgimg2 from '../images/whiteimg2.avif'

import { BsPlayCircleFill } from "react-icons/bs";

export const HeroSection = () => {
  return (
    <>
      <div className="hero-section">
        <div className="left">
          <div className="hero-heading">
            <div>We boost </div>
            <div>growth for your</div>
            <div>startup business</div>
          </div>

          <div className="hero-containt">
            <div>
            Empowering dreams, igniting Innovation 
            </div>
            <div>E-Cell is your catalyst for entrepreneurial success,</div>
            <div>  dare to dream, dare to disrupt!
</div>
          </div>

          <div className="btn-container">
            <div class="btn-pink" id="btn">
              Get Started
            </div>

            <div className="learn-btn">
              <div className="play-bottom">
                <BsPlayCircleFill style={{ fontSize: "50px" }} />
              </div>

              <span> Learn More</span>
            </div>
            {/* <div class="btn-pink" id="btn">Learn More</div> */}
          </div>
        </div>

        <div className="right">
            <img id="img2" src={rightimg} alt="network issue" />      
        </div>
      </div>
    </>
  );
};
export default HeroSection;
