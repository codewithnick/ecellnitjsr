import React from "react";
import "../styles/VisionGoal.css";

export const VisionGoal = () => {
  return (
    <>
      <div id="visiongoal" className="center-align">
        Vision & Goals
        </div>
      
      <div className="container">
        <div className="card">
          <div className="box">
            <div className="content">
             
              <h3>Mission</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="box">
            <div className="content">
             
              <h3>Vision</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="box">
            <div className="content">
             
              <h3>Goal</h3>
              <p>totam velit? Iure nemo labore inventore?</p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default VisionGoal;
