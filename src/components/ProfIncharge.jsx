import React from 'react'
import Professor1 from "../images/professorIncharge.webp"
import Professor2 from "../images/ranjitprashad.webp"
import Professor3 from "../images/RamKrishna.webp"
import Professor4 from "../images/kanika.webp"
import styled from 'styled-components'
const ProfIncharge = () => {
  return (
    <Professors>
      <h2>Special Thanks</h2>
    <div className="professorImage">
      <div>
        <img src={Professor1} alt="" />
        <h3>Dr. Ashok Mandal</h3>
      </div>
      <div>
        <img src={Professor2} alt="" />
        <h3>Dr. Ranjit Prasad</h3>
      </div>
      <div>
        <img src={Professor3} alt="" />
        <h3>Dr. Ram Krishna</h3>
      </div>
      <div>
        <img src={Professor4} alt="" />
        <h3>Dr. Kanika Prasad</h3>
      </div>
    </div>
    <div className="professorLines">
      <p> 
          Team E-Cell extends our heartfelt gratitude for your unwavering support and guidance in making our event, Business Conclave 2023, a resounding success.
      </p>
    </div>
    </Professors>
  )
}
const Professors = styled.div`
width: 80%;
margin: auto;
padding-bottom: 100px;
@media (max-width: 400px){
  width: 96%;
}
h2,h3{
  margin-top: 20px;
  text-align: center;
  font-weight: 600;
}
h3{
  @media (max-width: 400px){
    font-size: 11px;
  }
}
.professorImage{
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  justify-content: space-between;
  img{
    height: 250px;
    width: 250px;
    border-radius: 50%;
    @media (max-width: 900px){
      height: 200px;
      width: 200px;
    }
    @media (max-width: 400px){
      height: 100px;
      width: 100px;
    }
  }
}
`;
export default ProfIncharge




/*
 
 import React from "react";
//for CSS
import styled from "styled-components";
import "../styles/ProfIncharge.css";

//Design assets
import Side_design_1 from "../images/Design/Pro_incharge_img_1.svg"
import Side_design_2 from "../images/Design/Pro_incharge_img_2.svg"
 
//Image
import DemoImage from "../images/professorIncharge.jpg"

//Icons
import Quotes from "../images/Icon/left-quote.png"
import Star from "../images/Icon/star.png"
export const ProfIncharge = () => {
  return (
    <div style={{"background": "#f0f0f0"}}>
    <ProfessorIncharge>
     
        <h2 style={{"paddingTop": "40px"}}>Professor Incharge</h2>
        <PiBox>
          {/* Div that contain Professor Pic and other design*/ /*}
          <div className="pic">
            <div className="imgframe">
            <img src={Side_design_1} alt="none" className="side_1" />
            <img src={Side_design_2} alt="none" className="side_2" />
            <img src={DemoImage} alt="Professor img" />
            </div>
            
          </div>

          {/* Div that contain Professor details and other design*/ /*}
          <div className="detail">
           <img src={Quotes} alt="Quotes" /><br/>

           {/* This star contain all the stars */ /*}
           <Flexbox className="star">
           <img src={Star} alt="Star" />
           <img src={Star} alt="Star" />
           <img src={Star} alt="Star" />
           <img src={Star} alt="Star" />
           <img src={Star} alt="Star" />
           </Flexbox>
           {/* Professor details*/ /*}
            <p style={{"fontWeight": "500"}}>
            As the Professor Incharge of the E-Cell at NIT, I take pride in witnessing our students' entrepreneurial journey. The E-Cell is a catalyst for innovation, fostering a culture where students explore and unleash their entrepreneurial potential. We're dedicated to providing a nurturing environment with mentorship, resources, and opportunities, empowering students to turn their ideas into successful ventures.              </p>
           
           
            {/* Professor name and post */ /*}
            <Flexbox style={{"justifyContent": "space-between"}}>
              <div style={{"marginTop": "50px","width": "firContent"}}>
              <h4 style={{"fontWeight": "500"}}>Dr. Ashok Kumar Mandal</h4>{/* Professor name*/ /*}
              <h6 style={{"fontWeight": "300"}}>Professor Incharge, Ecell</h6>{/* Professor Post*/ /*}
              </div>
            </Flexbox>
            </div>
          
        </PiBox>
     
    </ProfessorIncharge>
    </div>
  );
};

const ProfessorIncharge = styled.div`
margin: 0 5% 0 5% ;
font-family: "Inter", sans-serif;
background-color: #f0f0f0;

.detail{
  margin: auto;
  .star{
    img{
      width: 20px;
      margin: 3px;
    }
  }
  p{
    weight: 500;
    font-family: "Inter", sans-serif;
  }
  img{
    width: 25px;
  }
}
.pic{
  width: 50%;
  margin-left: 10%;
  margin-top: 5%;
  @media (max-width: 768px) {
    width: 80%;
    margin 5%;
  }
  .imgframe{
    position: relative;
    width: 330px;
    height: 350px;
    margin: auto;
    border-radius: 10px;
    display: block;
    @media (max-width: 768px) {
      height: 270px;
      width: 250px;
     }
  }
  img{
    height: 350px;
    position: absolute;
    margin: 14px;
    bottom: 0;
    @media (max-width: 768px) {
      height: 250px;
     
    }
  }
  .side_1{
    position: absolute;
    top: -224px;
    left: -59px;
    width: 50px;
    display: block;
    @media (max-width: 768px) {
      display: none;
     }
  }
  .side_2{
    position: absolute;
    bottom: -196px;
    right: -15px;
    width: 50px;
    display: block;
    @media (max-width: 768px) {
      display: none;
     }
  }
}
h2{
  font-weight: 500;
  font-size: 30px;
  color: #0b1b35;
  font-family: "Inter", sans-serif;
  text-align: center;
}
`;

const Flexbox = styled.div`
display: flex;
`;
const PiBox = styled.div`
display: flex;
flex-direction: row;
@media (max-width: 768px) {
  flex-direction: column;
  width: 90%;
  overflow: hidden;
  margin: 5%;
  margin-top: 2%;
  margin-bottom: 100px;
}
`;
export default ProfIncharge;

 */