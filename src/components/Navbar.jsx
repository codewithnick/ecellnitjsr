import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div id="navbar">
        <img src="..." alt="logo" />
        <div id="navbar-right">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/teams">Team</Link>
            </li>
            <li>
              <Link to="/contactus">Contact Us</Link>
            </li>
          </ul>
          <button>
            <Link to="/register">Register</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
