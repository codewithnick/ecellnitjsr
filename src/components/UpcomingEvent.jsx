
import React from 'react';
// import Card from './Card';
// import '../styles/UpcomingEvent.css'
import '../styles/BusinessConclave.css'

import BusinessTycoon from "../images/BusinessConclave/BusinessTycoon.JPG"
import CorporateRodies from "../images/BusinessConclave/CorporateRodies.JPG"
import IdeaHackathon from "../images/BusinessConclave/IdeaHackathon.JPG"
import StarSpeaker from "../images/BusinessConclave/StarSpeaker.JPG"
import TeenPrenure from "../images/BusinessConclave/TeenPrenure.JPG"


// const cardsData = [
//   {id: 0, color: '#85A0A6',TextColor: "#fff", imageSrc:'Cards/image0.png',title: 'Business Conclave', text: 'Get ready for the grandeur of innovation and entrepreneurship as NIT Jamshedpur hosts its largest business conclave yet, promising a dynamic fusion of ideas, industry leaders, and unparalleled networking opportunities.' ,link: 'https://unstop.com/college-fests/business-conclave-2023-national-institute-of-technology-nit-jamshedpur-167842'},
//   { id: 1, color: '#111C54',TextColor: "#f2b0b0", imageSrc:'Cards/image1.jpg',title:'Business Tycoons', text: 'Guidance from successful entrepreneur Topics: Journey, innovation and market trends,overcoming challenges, Entrepreneurship in,digital age, advice for aspiring entrepreneur.', link: 'https://unstop.com/college-fests/business-conclave-2023-national-institute-of-technology-nit-jamshedpur-167842' },
//   { id: 2, color: 'black',TextColor: "#fff", imageSrc: 'Cards/image2.png',title:'Corporate roadies', text: "The event is divided into 3 sub events :- 1. Pitch there Problem statement 2. Case study submission 3. Final presentation:- Shortlisted participants will proceed to the final round", link: 'https://unstop.com/competitions/corporate-roadies-business-conclave-2023-national-institute-of-technology-nit-jamshedpur-811878' },
//   { id: 3, color:'#FCD12A',TextColor: "#f7e4a0", imageSrc: 'Cards/image3.jpg',title:'Star speaker', text: "Our Star Speaker will guide everyone through the dynamic landscape of the business world, providing valuable insights and strategies to help us navigate and thrive in today's market", link: 'https://unstop.com/o/rml2Bco?lb=uNLs4b3&utm_medium=Share&utm_source=shortUrl' },
//   { id: 4, color: '#5d5555',TextColor: "#333", imageSrc: 'Cards/image4.png',title:'Idea Hackathon', text: 'we would provide a platform to people from across India to share their startup ideas and gain access to seed funding from top investors.' , link: 'https://unstop.com/hackathons/national-idea-hackathon-business-conclave-2023-national-institute-of-technology-nit-jamshedpur-811892'},
//   { id: 5, color: '#E090DF',TextColor: "#f2cbf1", imageSrc: 'Cards/image5.png',title:'Teenpreneus', text: 'This is an offline group discussion round. All the Round 1 qualifiers will get grouped as board members and   will be provided with a specific role to handle. They will be  provided with a problem statement and asked to come up with asolution through discussion.', link: 'https://unstop.com/competitions/teenpreneurs-business-conclave-2023-national-institute-of-technology-nit-jamshedpur-817219' },
// ];
function App() {
  return (
    <div className="App" id='Upcoming'>
      <header><h1> Business Conclave</h1></header>
      <div className="card-container">
      <div className="rowContainter1">
          <div className="card">
            <img
            src={BusinessTycoon}
              alt="Card Image"
            />
            <div className="card-info">
              <h2 className='h2'>Business Tycoons</h2>
              <p>
              Get ready for the grandeur of innovation and entrepreneurship as NIT Jamshedpur hosts its largest business conclave yet, promising a dynamic fusion of ideas, industry leaders, and unparalleled networking opportunities
              </p>
              <div className="btn">
              <button class="button-42" role="button"><a href="/"><a href="/">Read More</a></a></button>
              </div>
            </div>
          </div>
          <div className="card card-right">
            <img
              src= {CorporateRodies}
              alt="Card Image"
            />
                      <div className="card-info">
              <h2 className='h2'>Corporate roadies</h2>
              <p>
              The event is divided into 3 sub events :- 1. Pitch there Problem statement 2. Case study submission 3. Final presentation:- Shortlisted participants will proceed to the final round
              </p>
              <div className="btn">
              <button class="button-42" role="button"><a href="/"><a href="/">Read More</a></a></button>
              </div>
            </div>
          </div>
        </div>
        <div className="rowContainter1">
          <div className="card">
            <img
              src={IdeaHackathon}
              alt="Card Image"
            />
            <div className="card-info">
              <h2 className='h2'>Idea Hackathon</h2>
              <p>
              We would provide a platform to people from across India to share their startup ideas and gain access to seed funding from top investors.
              </p>
              <div className="btn">
              <button class="button-42" role="button"><a href="/"><a href="/">Read More</a></a></button>
              </div>
            </div>
          </div>
          <div className="card card-right">
            <img
              src={StarSpeaker}
              alt="Card Image"
            />
            <div className="card-info">
              <h2 className='h2'>Star speaker</h2>
              <p>
              Our Star Speaker will guide everyone through the dynamic landscape of the business world, providing valuable insights and strategies to help us navigate and thrive in today's market
              </p>
              <div className="btn">
              <button class="button-42" role="button"><a href="/"><a href="/">Read More</a></a></button>
              </div>
            </div>
          </div>
        </div>

        <div className="rowContainter1">
          <div className="card">
            <img
              src={TeenPrenure}
               alt="Card Image"
            />
            <div className="card-info">
              <h2 className='h2'>Teenpreneus</h2>
              <p>
              This is an offline group discussion round. All the Round 1 qualifiers will get grouped as board members and   will be provided with a specific role to handle. They will be  provided with a problem statement and asked to come up with asolution through discussion.
              </p>
              <div className="btn">
              <button class="button-42" role="button"><a href="/"><a href="/">Read More</a></a></button>
              </div>
            </div>
          </div>
       
        </div>

        {/* {cardsData.map((card) => (
          <a href={card.link} style={{width: "100vw"}}>
          <Card key={card.id} color={card.color} TextColor={card.TextColor} title={card.title} imageSrc={card.imageSrc} text={card.text} link={card.link}/>
          </a>
        ))} */}
      </div>
    </div>
  );
}

export default App;
