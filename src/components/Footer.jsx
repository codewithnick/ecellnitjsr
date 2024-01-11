import React from 'react';
import { Link } from 'react-router-dom';
//CSS
import styled from 'styled-components';
import '../styles/Footer.css';
 //Image
 import Logo from "../images/logo.webp"

 //Icon
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faLinkedin,faFacebookMessenger,faXTwitter,faInstagram,faYoutube } from '@fortawesome/free-brands-svg-icons';
 import { faMessage ,faPhone} from '@fortawesome/free-solid-svg-icons';
function Footer() {
    return (
    <Footerdiv>
     <Flexbox>
      <div className="logo">
        <div>
          <img src={Logo} alt="Logo" style={{"width": "150px"}}/><br/>
          <h3>Entrepreneurship Cell</h3>
          <h3>National Institute of Technology</h3>
          </div>
          <div> 
         <a href="https://www.linkedin.com/company/e-cell-nit-jamshedpur1234/"><FontAwesomeIcon icon={faLinkedin} className="links"/></a> 
          <a href="https://www.facebook.com/entrepreneurship.cell.nit.jsr"><FontAwesomeIcon icon={faFacebookMessenger} className="links"/></a>
          <a href="https://instagram.com/ecell.nitjsr?igshid=NGVhN2U2NjQ0Yg"><FontAwesomeIcon icon={faInstagram} className="links"/></a>
          <a href="https://www.youtube.com/@e-cellnitjamshedpur"><FontAwesomeIcon icon={faYoutube} className="links"/></a>
          </div>
          
      </div>
      <div className="Footer_nav">
          <table>
            <tr>
              <th>About</th>
              <th>Team</th>
              <th>Events</th>
              <th>Contact us</th>
            </tr>
            <tr>
              <td><Link to="/#Aboutus_mission">Mission</Link></td>
              <td><Link to="/teams">Team Member</Link></td>
              <td><Link to="/events#Upcoming">Upcoming Event</Link></td>
              <td><Link to="/contactus#LetTalk">Ask a query</Link></td>
              
            </tr>
            <tr>
              <td><Link to="/#About_vision">Vision</Link></td>
              <td><Link to="/teams">Gallery</Link></td>
              <td><Link to="/events#pastEvent">Past Event</Link></td>
              <td> <FontAwesomeIcon icon={faPhone} style={{"margin": "5px"}}/>+91 9559754134</td>
            </tr>
            <tr>
              <td><Link to="/#About_goal">Goal</Link></td>
              <td></td>
              <td></td>
              <td> <FontAwesomeIcon icon={faMessage} style={{"margin": "5px"}}/>ecell@nitjsr.ac.in</td>
            </tr>
          </table>    
      </div>
     </Flexbox>
     <div className="copyright">
        <h5>Copyright @ecell nit jsr 2023. All Right Reserved</h5>
     </div>
      </Footerdiv>
    );
  }
  
const Flexbox = styled.div`
display: flex;
`;
const Footerdiv = styled.footer`
width: 100%;
overflow-x: hidden;
padding: 5%;
background: #F0F0F0;
background: linear-gradient(180deg, #F0F0F0, rgba(227, 221, 255, 1.0));
.copyright{
  margin-top: 100px;
h5{
  text-align: center;
}
}
.links{
  padding: 5px;
  font-size: 30px;
  transition: 0.5s;
    }
    .links:hover{
      color:rgb(25,4,130)
    }
    .Footer_nav{
      width: 60%;
      display: block;
      @media (max-width: 900px) {
        display: none;
      }
      table{
        width: 90%;
        margin: 5%;
        th{
          text-align: start;
          padding-bottom: 20px;
        }
        td{
          text-align: start;
          padding-bottom: 10px;
        }
      }
    }
.logo{
  width: 40%;
  display: block;
  @media (max-width: 900px) {
    width: 90%;
    display: flex;
    justify-content: center;
    align-item: center;
    img{
      width: 15opx;
    }
  }
  img{
    width: 200px;
  }
  h3{
    padding: 3px;
  }
}
`;

export default Footer
