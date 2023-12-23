import React, { useState } from "react";
import ecelllogo from "../images/logo.png";
//import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.getElementById("navbar").style.backgroundColor =
        "rgba(55, 55, 55)";
      document.getElementById("navbar").style.height = "100vh";
      document.getElementById("menu").style.animationName = "navslide";
      document.getElementById("menu").style.left = "0%";
      document.getElementById("menu").style.paddingBottom = "10vh";
      document.getElementById("menu").style.paddingTop = "5vh";
      document.getElementById("navbar").style.position = "fixed";
      document.getElementById("navbar").style.left = "0%";
      document.getElementById("navbar").style.top = "0%";
      document.getElementById("navbar").style.zIndex = "99";
      //document.body.style.height="100vh";
      document.body.style.overflow="hidden";
    } else {
      document.getElementById("navbar").style.backgroundColor = "";
      document.getElementById("navbar").style.height = "fit-content";
      document.getElementById("menu").style.left = "150%";
      document.getElementById("menu").style.animationName = "revnavslide";
      document.getElementById("menu").style.paddingBottom = "0vh";
      document.getElementById("menu").style.paddingTop = "0vh";
      document.body.style.overflow="scroll";
    }
  };
  const navigatebtn=()=>{
    setMenuOpen(!menuOpen);
      document.body.style.overflow="scroll";
      document.getElementById("navbar").style.backgroundColor = "";
      document.getElementById("navbar").style.height = "fit-content";
      document.getElementById("menu").style.left = "150%";
      document.getElementById("menu").style.animationName = "revnavslide";
      document.getElementById("menu").style.paddingBottom = "0vh";
      document.getElementById("menu").style.paddingTop = "0vh";
  }
  return (
    <NavDiv>
      <div
        id="navbar"
        className={`${menuOpen ? "navbar-back nav-responsive" : ""}`}
      >
        <img src={ecelllogo} id="ecelllogo" alt="" />

        <div id="menu">
          <div id="temp">
            <Link onClick={navigatebtn} className="nav-links" to="/">
              Home
            </Link>
            <Link onClick={navigatebtn} className="nav-links" to="/events">
              Events
            </Link>
            <Link onClick={navigatebtn} className="nav-links" to="/teams">
              Team
            </Link>
         
              <Link onClick={navigatebtn} className="nav-links" to="/contactus">
                  Contact Us
              </Link> 
              <Link onClick={navigatebtn} className="nav-links" to="/aboutus">
                  About Us
              </Link> 
            
          </div>
          <div>
            <Link onClick={navigatebtn} to="/register">
              <button className="reg-btn">Register</button>
            </Link>
          </div>
        </div>

        <div id="reg-hum">
          <div
            className={`hamburger ${menuOpen ? "cross" : ""}`}
            onClick={toggleMenu}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </div>
    </NavDiv>
  );
};
const NavDiv = styled.div`
#navbar {
  width: 100vw;
  box-sizing: border-box;
  background-color: #FFFFFF;
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 3.2rem;
  color: #fff;
  transition: transform 0.3s ease-in-out;
  font-family: 'Be Vietnam Pro', sans-serif;
  overflow: hidden;
}

#reg-hum{
  display: none ;
  gap: 5px;
}

#ecelllogo {
  width: 8rem;
}
#menu{
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}


#menu a {
  font-size: 1.05rem;
  letter-spacing: 0.4px;
  padding: 0px 20px;
  color: black;
  text-decoration: none;
}

.reg-btn{
  cursor: pointer;
  padding: 0.4rem 0.9rem !important;
  border-radius: 4px;
  font-size: 1.1rem;
  background-color: #190482;
  color: #fff;
  border-color: #220d89;
}

.reg-btn:hover{
  transform: scale(1.03);
  transition: 0.3s;
}

/* Styles for mobile screens (max-width: 768px) */
@media (max-width: 850px) {
  #navbar{
      width: 100vw;
  }
  #temp{
      padding-left: 0;
  }
  #reg-hum{
      display: flex;
  }
  .hamburger {
      display: flex;
      flex-direction: column;
      cursor: pointer;
      margin-left: 15px;
      border-radius: 50%;
      padding: 14px 12px;
      transition: transform 0.3s ease-in-out;
  }
  
  .hamburger:hover {
      background-color:white;
  }
  
  .hamburger .bar {
      width: 30px;
      height: 2px;
      background-color: black;
      margin: 3px 0;
      transition: all 0.3s ease-in-out;
  }
  
  .hamburger.cross .bar:nth-child(1) {
      transform: rotate(-45deg) translate(-4px, 4px);
  }
  
  .hamburger.cross .bar:nth-child(2) {
      opacity: 0;
  }
  
  .hamburger.cross .bar:nth-child(3) {
      transform: rotate(45deg) translate(-4px, -4px);
  }   

  #menu {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      transition: transform 0.3s ease-in-out;
      position: relative;
      animation-duration: 500ms;
      left: 150%;
     
  }
  
  @keyframes navslide {
      0% {
          left: 150%;
      }
  
      20% {
          opacity: 0;
      }
  
      100% {
          left: 0%;
          opacity: 1;
      }
  }
  
  @keyframes revnavslide {
      0% {
          left: 0%;
      }
  
      80% {
          opacity: 0;
      }
  
      100% {
          left: 150%;
      }
  }
  .nav-responsive img{
      display: none;
  }
  .nav-responsive #menu{
      width: 100%;
      height: 100%;
  }
  .nav-responsive #reg-hum{
      position: absolute;
      top: 1rem;
      right: 1rem;
  }
  .nav-responsive #menu div:nth-child(1){
      display: flex !important;
      justify-content: space-around !important;
      flex-direction: column !important;
      height: 100%;
      text-align: center;
  }
  .nav-links{
      color: #FFFFFF !important;
  }
}

@media (max-width: 620px){
  #ecelllogo {
      width: 6rem !important;
  }
  #navbar{
      padding: 12px 2.5rem;
  }
}
@media (max-width: 560px){
  #navbar{
      padding: 12px 0rem;
  }
}
@media (max-width: 510px){
  #navbar{
      padding: 2px 2rem;
      width: 100vw;
      justify-content: space-evenly;
  }
}
`;
export default Navbar;
