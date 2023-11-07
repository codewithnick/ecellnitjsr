import React from 'react';

const Card = ({ color, imageSrc, text }) => {
  const handleClick = () => {
    window.location.href = 'https://www.google.com';
  };

  return (
    <div className="card" style={{ backgroundColor: color }} onClick={handleClick}>
      <img src={imageSrc} alt="Card" />
      <div className="card-text">{text}</div>
    </div>
  );
};

export default Card;
