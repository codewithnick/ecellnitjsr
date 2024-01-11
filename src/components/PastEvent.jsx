import React, { useState, useEffect } from 'react';
import "../styles/PastEvent.css";
import bigshot from "../images/pastEvents/bigshot.webp"
import bizbooost from "../images/pastEvents/bizbooost.webp"
import caseathon from "../images/pastEvents/caseathon.webp"
import mockstock from "../images/pastEvents/mockstock.webp"
import prompteng from "../images/pastEvents/prompteng.webp"
import supplychain from "../images/pastEvents/supplychain.webp"
import mock2 from "../images/pastEvents/mock2.webp"


const PastEvent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    updateCarousel();
    // eslint-disable-next-line
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % 6);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + 6) % 6);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const updateCarousel = () => {
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(${-currentIndex * 100}%)`;

    const indicators = document.querySelectorAll('.carousel-indicator');
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === currentIndex);
    });

    const captions = document.querySelectorAll('.carousel-caption');
    captions.forEach((caption, index) => {
      caption.style.display = index === currentIndex ? 'block' : 'none';
    });
  };

  return (
    <>
      
    <div className="pasteventimg" id="pastEvent">
    <header>
        <h2>E-Cell Events</h2>
      </header>
      <div id="carouselExampleIndicators" className="carousel-container">
        <div className="carousel-inner">
          <div className="carousel-item">
            <img
              className="pastEvents"
              src={bigshot}
              alt="image 1"
            />
            {/* <div className="carousel-caption">
              <h5>This is event 1 </h5>
              <p>We add something big in this event</p>
            </div> */}
          </div>
          <div className="carousel-item">
            <img
              className="pastEvents"
              src={mock2}
              alt="image 2"
            />
          </div>
          <div className="carousel-item">
            <img
              className="pastEvents"
              src={prompteng}alt="image 3"
            /></div>
          <div className="carousel-item">
            <img
              className="pastEvents"
              src={bizbooost}
              alt="image 1"
            /></div>
          <div className="carousel-item">
            <img
              className="pastEvents"
              src={caseathon}
              alt="image 2"
            /></div>
          <div className="carousel-item">
            <img
              className="pastEvents"
              src={supplychain}
              alt="image 3"
            /></div>
        </div>
      </div>
       <ul className="carousel-indicators">
          {[0, 1, 2,3,4,5].map((index) => (
            <li
              key={index}
              className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></li>
          ))}
        </ul>

        <div className="carousel-control carousel-control-prev" onClick={prevSlide}>
          &#60;
        </div>
        <div className="carousel-control carousel-control-next" onClick={nextSlide}>
          &#62; 
        </div>
      </div>
      <script>
        {`
          let currentIndex = 0;

          function nextSlide() {
            currentIndex = (currentIndex + 1) % 6;
            updateCarousel();
          }

          function prevSlide() {
            currentIndex = (currentIndex - 1 + 6) % 6;
            updateCarousel();
          }

          function goToSlide(index) {
            currentIndex = index;
            updateCarousel();
          }

          function updateCarousel() {
            const carouselInner = document.querySelector('.carousel-inner');
            carouselInner.style.transform = \`translateX(${-currentIndex * 100}%);

        const indicators = document.querySelectorAll('.carousel-indicator');
        indicators.forEach((indicator, index) => {
          indicator.classList.toggle('active', index === currentIndex);
        });

        const captions = document.querySelectorAll('.carousel-caption');
        captions.forEach((caption, index) => {
          caption.style.display = index === currentIndex ? 'block' : 'none';
        });
      }
    `}
      </script>
    </>
  );
};

export default PastEvent;