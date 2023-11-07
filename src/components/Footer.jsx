import React from 'react';
import '../styles/Footer.css';

function Footer() {
    return (
      <footer>
        <div className="footer-section">
          <h4>Navigate</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/associates">Associates</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>About Us</h4>
          <ul>
            <li><a href="/porfolio">Portfolio</a></li>
            <li><a href="/alumni">Alumni</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Initiatives</h4>
          <ul>
            <li><a href="/xyz">XYZ</a></li>
            <li><a href="/abc">ABC</a></li>
          </ul>
        </div>
        <div className='footer-sec2'>
            <p>Copyright &copy; 2023, E-cell, NIT Jamshedpur</p>
        </div>
        <div className='footer-sec2'>
            <a href='ecell@nitjsr.ac.in'>ecell@nitjsr.ac.in</a>
        </div>
        <div className='footer-sec2'>
            <a href='www.facebook.com'>Facebook</a>
            <a href='www.instagram.com'>Instagram</a>
            <a href='www.twitter.com'>Twitter</a>
            <a href='www.linkdin.com'>LinkdIn</a>
        </div>
      </footer>
    );
  }
  


export default Footer
