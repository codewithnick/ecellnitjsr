import React, { useState } from "react";
import ecelllogo from "../images/logo.png";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.getElementById("navbar").style.backgroundColor =
        "rgba(51, 51, 51, 0.5)";
      document.getElementById("navbar").style.height = "100vh";
      document.getElementById("menu").style.animationName = "navslide";
      document.getElementById("menu").style.left = "0%";
      document.body.style.height="100vh";
      document.body.style.overflow="hidden";
    } else {
      document.getElementById("navbar").style.backgroundColor = "";
      document.getElementById("navbar").style.height = "fit-content";
      document.getElementById("menu").style.left = "150%";
      document.getElementById("menu").style.animationName = "revnavslide";
    }
  };
  const navigatebtn=()=>{
    setMenuOpen(!menuOpen);
      document.body.style.overflow="scroll";
      document.getElementById("navbar").style.backgroundColor = "";
      document.getElementById("navbar").style.height = "fit-content";
      document.getElementById("menu").style.left = "150%";
      document.getElementById("menu").style.animationName = "revnavslide";
  }
  return (
    <>
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
    </>
  );
};

export default Navbar;
