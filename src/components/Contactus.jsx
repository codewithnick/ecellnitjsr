import React from "react";
//for Css
import styled from "styled-components";
import "../styles/Register.css";
//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faBuilding,faEnvelope, faCommentDots, faUsersRectangle,faArrowRight} from "@fortawesome/free-solid-svg-icons";
export const Contactus = () => {
  return (
    <div style={{"backgroundColor": "#f0f0f0","padding": "10px"}} id="LetTalk">
      <RegisterBox style={{ padding: "5%" }}>
        {/*/Text is a div that contain all the social media link */}
        <Text>
          <div className="TextHeader">
            <h2>Get in Touch with the E-Cell</h2>
          </div>
          <div className="Textbody">
            <p>
            Welcome to the Entrepreneurship Cell at National institue of technology Jamshedpur! We value your interest and inquiries. Whether you're a student, an aspiring entrepreneur, or a potential collaborator, we're here to assist you.            </p>
            {/*/Icon with Links */}
            <div className="Contact_info">
              <Flexbox>
                <FontAwesomeIcon icon={faEnvelope} className="links"/>
                <h4>ecell@nitjsr.ac.in</h4>
              </Flexbox>
              <Flexbox> 
                <FontAwesomeIcon icon={faBuilding} className="links"/>
                <h4>Nit jsr, Adityapur 2 , Jamshedpur , jharkhand</h4>
              </Flexbox>
              <Flexbox>
              <FontAwesomeIcon icon={faPhone} className="links"/>
                <h4>+91 9876543210</h4>
              </Flexbox>
            </div>
          </div>
        </Text>
        {/*/Register Form is in this container */}
        <RegisterForm>
          <form>
            <div style={{ position: "relative" }}>
            <FontAwesomeIcon icon={faUsersRectangle} className="FormIcon"/>
              <input type="text" name="name" id="name" placeholder="Name" />
              <br />
            </div>
            <div style={{ position: "relative" }}>
            <FontAwesomeIcon icon={faEnvelope} className="FormIcon"/>
              <input type="email" name="email" id="email" placeholder="Email" />
              <br />
            </div>
            <div style={{ position: "relative" }}>
            <FontAwesomeIcon icon={faCommentDots} className="FormIcon"/>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Message"
              ></textarea>
            </div>
            <div style={{ position: "relative", width: "max-content" }}>
            <FontAwesomeIcon icon={faArrowRight} className="SubmitArrow"/>
              <input type="submit" value="Submit" />
            </div>
          </form>
        </RegisterForm>
      </RegisterBox>
    </div>
  );
};
const RegisterBox = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Aboutus = styled.div`
  width: 60%;
  margin: 2% 20% 0 20%;
  background-color: #f0f0f0;
  h2 {
    font-size: 30px;
    text-align: center;
    color: #0b1b35;
    font-family: "Inter", sans-serif;
    padding: 5px;
  }
  p {
    color: #666;
  }
  @media (max-width: 768px) {
    width: 90%;
    margin: 2% 5% 0 5%;
  }
`;
const Flexbox = styled.div`
  display: flex;
`;
const Text = styled.div`
  width: 40%;
  color: #0b1b35;
  @media (max-width: 768px) {
    width: 100%;
  }
  h2 {
    font-size: 30px;
    color: #0b1b35;
    font-family: "Inter", sans-serif;
    padding: 5px;
  }
  .Textbody {
    padding-top: 10px;
    width: 80%;
    @media (max-width: 768px){
      width: 100%;
    }
    p {
      color: #666;
    }
    .Contact_info {
      div {
        align-item: center;
      }
      padding-top: 15px;
      h4 {
        margin: 5px 0 5px 0;
      }
      .links {
        color: #190482;
        width: 50px;
        padding: 10px;
      }
    }
  }
`;

const RegisterForm = styled.div`
  width: 60%;
  font-family: "Inter", sans-serif;
  @media (max-width: 768px) {
    width: 100%;
  }
  h2 {
    color: #0b1b35;
    font-family: "Inter", sans-serif;
  }
  input {
    width: 90%;
    padding: 12px;
    margin: 5px;
    border: solid #190482 2px;
    border-radius: 5px;
    font-size: 15px;
  }
  input[type="submit"] {
    width: max-content;
    padding: 15px;
    padding-right: 50px;
    color: white;
    background: #190482;
    font-size: 20px;
    transition: 0.5s;
  }
  input[type="submit"]:hover {
    color: #190482;
    border: solid 3px #190482;
    background-color: #fff;
    .SubmitArrow{
      color: #190482;
    }
  }

  textarea {
    width: 90%;
    padding: 12px;
    margin: 5px;
    border: solid #190482 2px;
    border-radius: 5px;
    font-size: 15px;
  }
  .FormIcon {
    color: #190482;
    position: absolute;
    top: 15px;
    right: 11%;
    width: 25px;
  }
  .SubmitArrow{
    width: 40px;
    position: absolute;
    top: 30px;
    right: 20px;
    color: white;
    
  }
`;
export default Contactus;
