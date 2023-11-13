
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ color,imageSrc,title, text, link }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    
    window.location.href = link || 'https://www.google.com';
  };

  return (
    <div className="card" style={{ backgroundColor: color }} onClick={handleCardClick}>
      <div className="card-content">
        <div className='card-title'>{title}</div>
        <div className="card-text">{text}</div>
        <img src={imageSrc} alt={text} className="card-image" />
      </div>
    </div>
  );
};

export default Card;
