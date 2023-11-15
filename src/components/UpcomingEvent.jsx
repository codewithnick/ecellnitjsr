
import React from 'react';
import Card from './Card';
import '../styles/UpcomingEvent.css'

const cardsData = [
  { id: 1, color: '#111C54',TextColor: "#f2b0b0", imageSrc:'Cards/image1.jpg',title:'Business Tycoons', text: 'Guidance from successful entrepreneur Topics: Journey, innovation and market trends,overcoming challenges, Entrepreneurship in,digital age, advice for aspiring entrepreneur.', link: 'https://example1.com' },
  { id: 2, color: 'black',TextColor: "#fff", imageSrc: 'Cards/image2.png',title:'Corporate roadies', text: "The event is divided into 3 sub events :- 1. Pitch there Problem statement 2. Case study submission 3. Final presentation:- Shortlisted participants will proceed to the final round", link: 'https://unstop.com/competitions/corporate-roadies-business-conclave-2023-national-institute-of-technology-nit-jamshedpur-811878' },
  { id: 3, color:'#FCD12A',TextColor: "#f7e4a0", imageSrc: 'Cards/image3.jpg',title:'Star speaker', text: "Our Star Speaker will guide everyone through the dynamic landscape of the business world, providing valuable insights and strategies to help us navigate and thrive in today's market", link: 'https://example1.com' },
  { id: 4, color: '#5d5555',TextColor: "#333", imageSrc: 'Cards/image4.png',title:'Idea Hackathon', text: 'we would provide a platform to people from across India to share their startup ideas and gain access to seed funding from top investors.' , link: 'https://unstop.com/hackathons/national-idea-hackathon-business-conclave-2023-national-institute-of-technology-nit-jamshedpur-811892'},
  { id: 5, color: '#E090DF',TextColor: "#f2cbf1", imageSrc: 'Cards/image5.png',title:'Teenpreneus', text: 'This is an offline group discussion round. All the Round 1 qualifiers will get grouped as board members and   will be provided with a specific role to handle. They will be  provided with a problem statement and asked to come up with asolution through discussion.', link: 'https://unstop.com/competitions/teenpreneurs-business-conclave-2023-national-institute-of-technology-nit-jamshedpur-817219' },
];

function App() {
  return (
    <div className="App" id='Upcoming'>
      <h1>Upcoming Events</h1>
      <div className="card-container">
        {cardsData.map((card) => (
          <Card key={card.id} color={card.color} TextColor={card.TextColor} title={card.title} imageSrc={card.imageSrc} text={card.text} link={card.link}/>
        ))}
      </div>
      
    </div>
  );
}

export default App;
