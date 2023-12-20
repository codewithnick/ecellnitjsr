import React from "react";
import "../styles/VisionGoal.css";
import tmp from "../images/Icon/goal-.webp";
import mis from "../images/Icon/crosshairs-solid.svg";
import vis from "../images/Icon/eye-solid.svg";

export const VisionGoal = () => {
  return (
    <>
      <div id="visiongoal" className="center-align">
        Vision & Goals
      </div>

      <div className="container">
        <div className="card">
          <div className="box">
            <img src={mis} alt="" />
            <div className="content">
              <h3>Mission</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                totam velit? Iure nemo labore inventore?
              </p>
              <a href="/">Read More</a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="box">
          <img src={tmp} alt="" />
            <div className="content">
              <h3>Goal</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                totam velit? Iure nemo labore inventore?
              </p>
              <a href="/">Read More</a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="box">
          <img src={vis} alt="" />
            <div className="content">
             
              <h3>Vision</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                totam velit? Iure nemo labore inventore?
              </p>
              <a href="/">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VisionGoal;
