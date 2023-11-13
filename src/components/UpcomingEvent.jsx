
import React from 'react';
import Card from './Card';
import '../styles/UpcomingEvent.css'

const cardsData = [
  { id: 1, color: 'red', imageSrc:'Cards/image1.webp',title:'Business Tycoons', text: 'Business Tycoons', link: 'https://example1.com' },
  { id: 2, color: 'black', imageSrc: 'Cards/image2.png',title:'Corporate roadies', text: 'Corporate roadies', link: 'https://unstop.com/competitions/corporate-roadies-business-conclave-2023-national-institute-of-technology-nit-jamshedpur-811878' },
  { id: 3, color:'#FCD12A', imageSrc: 'Cards/image3.jpg',title:'Star speaker', text: 'Star speaker', link: 'https://example1.com' },
  { id: 4, color: '#5d5555', imageSrc: 'Cards/image4.png',title:'Idea Hackathon', text: 'Idea Hackathon' , link: 'https://unstop.com/hackathons/national-idea-hackathon-business-conclave-2023-national-institute-of-technology-nit-jamshedpur-811892'},
  { id: 5, color: '#E090DF', imageSrc: 'Cards/image5.png',title:'Teenpreneus', text: 'Teenpreneus', link: 'https://unstop.com/competitions/teenpreneurs-business-conclave-2023-national-institute-of-technology-nit-jamshedpur-817219' },
];

function App() {
  return (
    <div className="App">
      <h1>Upcoming Events</h1>
      <div className="card-container">
        {cardsData.map((card) => (
          <Card key={card.id} color={card.color} imageSrc={card.imageSrc} text={card.text} link={card.link}/>
        ))}
      </div>
    </div>
  );
}

export default App;
