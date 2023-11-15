import React from "react";
import "../styles/VisionGoal.css";
import tmp from "../images/Icon/goal .png";
import mis from "../images/Icon/crosshairs-solid.svg";
import vis from "../images/Icon/eye-solid.svg";

export const VisionGoal = () => {
  return (
    <div style={{"backgroundColor": "#fff","paddingBottom": "30px"}} id="About_vision">
      <div id="visiongoal" className="center-align">
        Vision & Goals
      </div>

      <div className="container">
        <div className="card" id="About_mission">
          <div className="box">
            <img src={mis} alt="" />
            <div className="content">
              <h3>Mission</h3>
              <p>
              To spread awareness about India's growing start-up ecosystem and expose students to its nuances thereby developing an entrepreneurial spirit in the students.
              </p>
              <a href="/">Read More</a>
            </div>
          </div>
        </div>

        <div className="card" id="About_goal">
          <div className="box">
          <img src={tmp} alt="" />
            <div className="content">
              <h3>Goal</h3>
              <p>
              To encourage students by educating them about diverse fields and their roles right from ideation to operation.
              </p>
              <a href="/">Read More</a>
            </div>
          </div>
        </div>

        <div className="card" id="About_vision">
          <div className="box">
          <img src={vis} alt="" />
            <div className="content">
             
              <h3>Vision</h3>
              <p>
              We envision a lively environment where students can explore their entrepreneurial talents. We aim to foster a culture of creativity and innovation, offering support, mentorship, and opportunities for students to turn their ideas into successful ventures.
              </p>
              <a href="/">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionGoal;
