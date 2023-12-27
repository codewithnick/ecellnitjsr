import React from 'react';
import '../styles/StarSpeaker.css'


import Gallery from "./Gallery"
import Img1 from "../images/event/StarSpeaker/img1.webp"
import Img2 from "../images/event/StarSpeaker/img2.webp"
import Img3 from "../images/event/StarSpeaker/img3.webp"
import Img4 from "../images/event/StarSpeaker/img4.webp"
import Img5 from "../images/event/StarSpeaker/img5.webp"
import Img6 from "../images/event/StarSpeaker/img6.webp"
import Img7 from "../images/event/StarSpeaker/img7.webp"
import Img8 from "../images/event/StarSpeaker/img8.webp"
import Img9 from "../images/event/StarSpeaker/img9.webp"
const CorporateRoadies = () => {
    const imgArr = [
        Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9
    ]
    return (
        <div className="corpoRodies">
            <header>
                <h1 style={{ marginLeft: "0%" }}>Star Speaker</h1>
            </header>
            <div className="team">
                <div className="about">
                    <h1 style={{ marginLeft: "0%" }}>About Us</h1>
                    <p> An unforgettable evening featuring none other than the renowned star speaker, Shikhar Goel, CTO of GeeksforGeeks! As one of the most captivating and influential voices in the industry, Shikhar Goel has grace the event with his presence and share his invaluable insights.</p>
                    <p>GeeksforGeeks is a well-established company in the field of higher education, with a focus on education. As a symbol of excellence in tech, Shikhar Goel, with his innovative approach, leads GeeksforGeeks. Shikhar Goel is a highly experienced professional with 7.9 years of work experience. With a wealth of knowledge, Shikhar Goel has shaped the tech industry. Don't miss the chance to hear from this luminary and gain insights to conquer the evolving world of technology.</p>
                </div>
                <div className="team-img">
                    <img
                        src={Img8}
                        alt="Profile 3"
                    />
                </div>
            </div>
            <h1 style={{ marginLeft: "3%" }}>Our Guest</h1>
            <div className="card-container">
                <div className="box1">
                    <div className="card">
                        <img
                            src={Img2}
                            alt="Card Image"
                        />
                    </div>
                    <div className="win-info">
                        <h2>Shikhar Goel</h2>
                    </div>
                </div>
          
            </div>


            <Gallery imgArr={imgArr} />
        </div>
    );
};

export default CorporateRoadies;
