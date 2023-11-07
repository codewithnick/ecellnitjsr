import React from "react";
import Card from './Card';
import "../styles/UpcomingEvent.css";

export const UpcomingEvent = () => {
  return (
    
    <div className="App">
      <h2>Upcoming events</h2>
      <Card color="red" imageSrc="image1.jpg" text="Business Tycoon" />
      <Card color="blue" imageSrc="image2.jpg" text="Corporate Roadies" />
      <Card color="green" imageSrc="image3.jpg" text="
      idea Hackathon" />
      <Card color="yellow" imageSrc="image4.jpg" text="Star Speaker" />
      <Card color="orange" imageSrc="image5.jpg" text="Teenprenur" />
    </div>
  );
};
export default UpcomingEvent;
