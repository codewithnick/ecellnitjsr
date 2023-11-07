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
      document.getElementById("menu").style.animationName = "navslide";
      document.getElementById("menu").style.left = "0%";
    } else {
      document.getElementById("navbar").style.backgroundColor = "";
      document.getElementById("menu").style.left = "150%";
      document.getElementById("menu").style.animationName = "revnavslide";
    }
  };
  return (
    <>
      <div id="navbar" className={`${menuOpen ? "navbar-back" : ""}`}>
        <img src={ecelllogo} id="ecelllogo" alt="" />
        <div id="navright">
          <div id="menu">
          <Link className="nav-links" to="/">Home</Link>
          <Link className="nav-links" to="/events">Events</Link>
          <Link className="nav-links" to="/teams">Team</Link>
          <Link className="nav-links" to="/contactus">Contact Us</Link>
          <Link to="/register"><button className="reg-btn">Register</button></Link>
          </div>
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
