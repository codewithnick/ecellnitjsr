
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const Card = ({ color,TextColor,imageSrc,title, text, link }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    
    window.location.href = link || 'https://www.google.com';
  };

  return (
    <CardDiv style={{ backgroundColor: color }} onClick={handleCardClick}>
      <div>
        <div className='EventText'>
          <h2 style={{color: "white"}}>{title}</h2>
          <div className="line"></div>
          <p style={{color: "white"}}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, doloremque!
          </p>
        </div>
        <div className="imgContainer"><img src={imageSrc} alt={text} className="card-image" /></div>
      </div>
    </CardDiv>
  );
};

const CardDiv = styled.div`
width: calc(90% - 60px);
height: 400px;
display: flex;
padding: 10px;
margin: 10px;
margin-bottom: 40px;
border-radius: 12px;
cursor: pointer;
border: 1px solid #cac6c6;
overflow: hidden;
position: relative;
.EventText{
  width: 60%;
  padding: 30px;
  @media (max-width: 768px){
    width: 80%;
  }
  .line{
    height: 5px;
    width: 30%;
    border-radius: 5px;
    background: #fff;
  }
  h2{
    font-size: 30px;
    font-weight: 500;
  }
}
.imgContainer{
  position: absolute;
  padding: 20px;  
  background: white;
  border-radius: 10px;
  bottom: -20px;
  right: 20px;
  width:50%;
  @media (max-width: 768px){
    width: 80%;
  }
}
img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
  transform-origin: center; 
  transform: scale(1);
  transition: transform 0.3s; 
}

&:hover img {
  transform: scale(1.2);
}
`;

export default Card;
