import React from "react";
import "../styles/HeroSection.css";

import rightimg from '../images/heroimage.png'
// import bgimg1 from '../images/whiteimg3.jpg'
// import bgimg2 from '../images/whiteimg2.avif'

import { BsPlayCircleFill } from 'react-icons/bs'


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

              <div className="learn-btn">
                <div className="play-bottom">
                   <BsPlayCircleFill style={{fontSize: '50px',
                                           }} />
                </div>
                 
                 <span> Learn More</span>
              </div>
              {/* <div class="btn-pink" id="btn">Learn More</div> */}
        
            </div>
        </div>
        

        <div className="right">
           <div className="right-img">
                <img id="img2" src={rightimg} alt="network issue" />
           </div>    
        </div>
      </div>


    </>
  );
};
export default HeroSection;
