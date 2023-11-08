import React from "react";
import "../styles/HeroSection.css";

import rightimg from '../images/heroimage.jpeg'
export const HeroSection = () => {
  return (
    <>
      <div className="hero-section">

        <div className="left">
            <div className="hero-heading">
                We boost growth for your startup 
                business
            </div>

            <div className="hero-containt">
              Our goal is top at the heart of the creativity service industry as a digital creator . In has a after comment
            </div>

            <div className="btn-container">

             <div class="btn-pink" id="btn">Get Started</div> 
             <div class="btn-pink" id="btn">Learn More</div>

            </div>
        </div>
        

        <div className="right">
           <div className="right-img">
                <img src={rightimg} alt="network issue" />
           </div>    
        </div>
      </div>
    </>
  );
};
export default HeroSection;
