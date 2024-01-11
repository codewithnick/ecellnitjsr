import React from 'react';
import '../styles/IdeaHackthon.css'


import Gallery from "./Gallery"
import Img1 from "../images/event/IdeaHackathon/img1.webp"
import Img2 from "../images/event/IdeaHackathon/img2.webp"
import Img3 from "../images/event/IdeaHackathon/img3.webp"
import Img4 from "../images/event/IdeaHackathon/img4.webp"
import Img5 from "../images/event/IdeaHackathon/img5.webp"
import Img6 from "../images/event/IdeaHackathon/img6.webp"
import Img7 from "../images/event/IdeaHackathon/img7.webp"
import Img8 from "../images/event/IdeaHackathon/img8.webp"
import Img9 from "../images/event/IdeaHackathon/img9.webp"
import Img10 from "../images/event/IdeaHackathon/judge1.webp"
import Img11 from "../images/event/IdeaHackathon/judge2.webp"
import Img12 from "../images/event/IdeaHackathon/judge3.webp"
const CorporateRoadies = () => {
    const imgArr = [
        Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9
    ]
    return (
        <div className="corpoRodies">
            <header>
                <h1 style={{ marginLeft: "0%" }}>Idea Hackathon</h1>
            </header>
            <div className="team">
                <div className="about">
                    <h1 style={{ marginLeft: "0%" }}>About Us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum consectetur voluptas nisi, hic, itaque iste harum incidunt quidem quo cupiditate atque enim amet, mollitia iusto animi autem? Molestiae praesentium vero ipsa tempore ipsum, asperiores impedit. Autem fugit aliquid dignissimos repudiandae iure delectus ducimus, unde modi doloremque perferendis, provident vitae cumque quis sit? Doloribus, sed. Eveniet quas provident voluptatem voluptates nisi sed in. Doloribus voluptate deleniti sunt accusantium at quasi em nihil neque eaque maiores porro? Ab eum a ipsam molestiae tenetur. Inventore vero et repellendus voluptates expedita velit debitis, iusto repellat natus enim?</p>
                </div>
                <div className="team-img">
                    <img
                        src={Img9}
                        alt="Profile 3"
                    />
                </div>
            </div>
            <h1 style={{ marginLeft: "3%" }}>Our Guests</h1>
            <div className="card-container">
                <div className="box1">
                    <div className="card">
                        <img
                            src={Img10}
                            alt="Card Image"
                        />
                    </div>
                    <div className="win-info">
                        <h2>Jatin Kataria</h2>
                    </div>
                </div>
                <div className="box1">
                    <div className="card">
                        <img
                            src={Img11}
                            alt="Profile 2"
                        />

                    </div>
                    <div className="win-info">
                        <h2>Kk Choudhary</h2>
                    </div>
                </div>
                <div className="box1">

                    <div className="card">
                        <img
                            src={Img12}
                            alt="Profile 3"
                        />

                    </div>
                    <div className="win-info">
                        <h2>Atul Puri</h2>
                    </div>
                </div>
            </div>
            <h1 style={{ marginLeft: "3%" }}>Our Winners</h1>

            <div class="winners-container">
                <div class="winner">
                    <h2>Sarthi</h2>
                    <p>1st</p>
                </div>
                <div class="winner">
                    <h2>Ananta</h2>
                    <p>2nd</p>
                </div>
                <div class="winner">
                    <h2>Derma 360</h2>
                    <p>3rd</p>
                </div>
            </div>

            <Gallery imgArr={imgArr} />
        </div>
    );
};

export default CorporateRoadies;
