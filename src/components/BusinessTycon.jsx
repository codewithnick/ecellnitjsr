import React from 'react';
import '../styles/BusinessTycon.css'


import Gallery from "./Gallery"
import Img1 from "../images/event/BusinessTycon/img1.webp"
import Img2 from "../images/event/BusinessTycon/img2.webp"
import Img3 from "../images/event/BusinessTycon/img3.webp"
import Img4 from "../images/event/BusinessTycon/img4.webp"
import Img5 from "../images/event/BusinessTycon/img5.webp"
import Img6 from "../images/event/BusinessTycon/img6.webp"
import Img7 from "../images/event/BusinessTycon/img7.webp"
import Img8 from "../images/event/BusinessTycon/img8.webp"
import Img9 from "../images/event/BusinessTycon/img9.webp"
const CorporateRoadies = () => {
  const imgArr = [
Img1,Img2,Img3,Img4,Img5,Img6,Img7,Img8,Img9
  ]
  return (
    <div className="corpoRodies">
      <header>
        <h1 style={{marginLeft: "0%"}}>Business Tycoon</h1>
      </header>
      <div className="team">
        <div className="about">
        <h1 style={{marginLeft: "0%"}}>About Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum consectetur voluptas nisi, hic, itaque iste harum incidunt quidem quo cupiditate atque enim amet, mollitia iusto animi autem? Molestiae praesentium vero ipsa tempore ipsum, asperiores impedit. Autem fugit aliquid dignissimos repudiandae iure delectus ducimus, unde modi doloremque perferendis, provident vitae cumque quis sit? Doloribus, sed. Eveniet quas provident voluptatem voluptates nisi sed in. Doloribus voluptate deleniti sunt accusantium at quasi em nihil neque eaque maiores porro? Ab eum a ipsam molestiae tenetur. Inventore vero et repellendus voluptates expedita velit debitis, iusto repellat natus enim?</p>
        </div>
        <div className="team-img">
        <img
              src={Img4}
              alt="Profile 3"
            />
        </div>
      </div>
      <h1 style={{marginLeft: "3%"}}>Our Guests</h1>
      <div className="card-container">
        <div className="box1">
          <div className="card">
            <img
              src={Img2}
              alt="Card Image"
            />
          </div>
          <div className="win-info">
            <h2>The Dumb Founder</h2>
          </div>
        </div>
        <div className="box1">
          <div className="card">
            <img
              src={Img3}
              alt="Profile 2"
            />
           
          </div>
          <div className="win-info">
            <h2>Thyperion Crew</h2>
          </div>
        </div>
        <div className="box1">

          <div className="card">
            <img
              src={Img7}
              alt="Profile 3"
            />
     
          </div>
          <div className="win-info">
            <h2> CMCR'S</h2>
          </div>
        </div>
      </div>

      <Gallery imgArr={imgArr}/>
    </div>
  );
};

export default CorporateRoadies;
