import React from "react";
import Bobble from '../images/fanStoreLogo.webp'
import "../styles/HeroSection.css";

import rightimg from "../images/banner-image.webp";
// import bgimg1 from '../images/whiteimg3.jpg'
// import bgimg2 from '../images/whiteimg2.avif'

import { BsPlayCircleFill } from "react-icons/bs";

export const HeroSection = () => {
  return (
    <>
      <div className="hero-section">
        <div className="left">
          <div className="hero-heading">
            <div>We Boost </div>
            <div>Your Startup</div>
          </div>

          <div className="hero-containt">
            <div style={{"fontWeight": 500}}>
            Empowering dreams, igniting Innovation 
            </div>
            <div  style={{"fontWeight": 500}}>E-Cell is your catalyst for entrepreneurial success,</div>
            <div  style={{"fontWeight": 500}}>  dare to dream, dare to disrupt!
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
      <div className="flexbox" style={{padding: "30px"}}>
      <h2 style={{fontWeight: "500",margin: "0", paddingBottom: "0", paddingRight: "80px",fontSize: "22px"}}>MERCHANDISE PARTNER</h2>
           <a href="https://fanstore.bobble.ai/" target="/"> <img src={Bobble} alt="Merchandise_partner" style={{height: "60px",width: "150px"}} className="bobble"/></a>
      </div>
    </>
  );
};
export default HeroSection;
