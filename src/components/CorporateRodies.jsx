import React from 'react';
import '../styles/CorporateRodies.css'

import cr1 from "../images/CorporateRodies/cr1.webp"
import cr2 from "../images/CorporateRodies/cr2.webp"
import cr3 from "../images/CorporateRodies/cr3.webp"
import akankshaa from "../images/CorporateRodies/akanshaa.webp"
import shubam from "../images/CorporateRodies/shubam.webp"
import shuvamF from "../images/CorporateRodies/shuvamF.webp"


const CorporateRoadies = () => {
  return (
    <div className="corpoRodies">
      <header>
        <h1>Corporate roadies</h1>
      </header>
      <div className="card-container">
        <div className="card">
          <img
          src={cr1}
            alt="Card Image"
          />
          <div className="card-info">
            <h2>The Dumb Founder</h2>
            <h3>Gardening Experience Improvement</h3>
            <h4>Priyanshu Raj</h4>
            <h5>Position : 1st</h5>
          </div>
        </div>
        <div className="card">
          <img
          src={cr2}
            alt="Profile 2"
          />

          <div className="card-info">
            <h2>Hyperion Crew</h2>
            <h3> Food Waste management</h3>
            <h4>Aswin | Anurag | Kishan | Shushant</h4>
            <h5>Position : 2nd</h5>
          </div>
        </div>
        <div className="card">
          <img
          src={cr3}
            alt="Profile 3"
          />
          <div className="card-info">
            <h2> CMCR'S</h2>
            <h3> Food Waste management</h3>
            <h4>Peehal Sinha | Sairishik koli</h4>
            <h5>Position : 3rd</h5>
          </div>
        </div>
      </div>
      <div className="judges">
        <header>
          <h1>Special Thanks</h1>
        </header>

        <section className="profile-container">
          <div className="profile">
            <img
            src={akankshaa}
              alt="Profile 1"
            />
          </div>
          <div className="profile">
            <img
            src={shuvamF}
              alt="Profile 2"
            />
          </div>
          <div className="profile">
            <img
            src={shubam}
              alt="Profile 3"
            />
          </div>
          <h3>Dr. Akanksha Shukla</h3>
          <h3>Dr. Shubham Tripathi</h3>
          <h3>Mr. Shubham Khanna</h3>
          <div className="info">
            <ul>
              <li>Assistant Professor with a remarkable 12-year teaching tenure</li>
              <li>Noteworthy publications in SSCI and Scopus indexed journals</li>
              <li>
                Successful completion of a Ministry of Education sponsored project.
              </li>
              <li>Holds a Ph.D. in management from MNNIT Allahabad</li>
            </ul>
          </div>
          <div className="info">
            <ul>
              <li>
                Currently serving as Assistant Professor at NIT Jamshedpur in
                Production & Industrial Engineering
              </li>
              <li>
                Ph.D. in Supply Chain Management with a focus on the fourth
                Industrial revolution
              </li>
              <li>Recipient of the 2018 Emerging Young Scientist Award</li>
            </ul>
          </div>

          <div className="info leftmost">
            <ul>
              <li>Director of T.I.M.E, Jamshedpur</li>
              <li>
                An alumnus of XLRI with outstanding achievements, including 99+%ile
                in CAT and XAT
              </li>
              <li>
                Senior Brand Manager at CIPLA, contributing extensive knowledge to
                the pharmaceutical industry
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CorporateRoadies;
