import React from "react";
//for Css
import styled from "styled-components";
import "../styles/Register.css";
//Icons
import Mail from "../images/Icon/mail.webp";
import Mail_2 from "../images/Icon/mail_2.webp";
import Office from "../images/Icon/officeBuilding.webp";
import Phone from "../images/Icon/Phone.webp";
import User from "../images/Icon/user-6581b8582f0a9.webp";
import Msg from "../images/Icon/message.webp";
import RightArrow from "../images/Icon/rightarrow-6581b87c3189f.webp";

export const Register = () => {
  return (
    <Flexbox style={{ padding: "5%" }}>
      {/*/Text is a div that contain all the social media link */}
      <Text>
        <div className="TextHeader">
          <h2>Let's Work</h2>
          <h2>Together!</h2>
        </div>
        <div className="Textbody">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
            veritatis porro nisi est deserunt iure quidem, in ex non asperiores!
          </p>
          {/*/Icon with Links */}
          <div className="Contact_info">
            <Flexbox>
              {" "}
              <img src={Mail} alt="Mail icon" />
              <h4>info@ecellnitjsr.com</h4>
            </Flexbox>
            <Flexbox>
              {" "}
              <img src={Office} alt="Mail icon" />
              <h4>Nit jsr, Adityapur 2 , Jamshedpur , jharkhand</h4>
            </Flexbox>
            <Flexbox>
              {" "}
              <img src={Phone} alt="Mail icon" />
              <h4>+91 9876543210</h4>
            </Flexbox>
          </div>
        </div>
      </Text>
      {/*/Register Form is in this container */}
      <RegisterForm>
        <form>
          <div style={{ position: "relative" }}>
            <img src={User} alt="User icon" className="FormIcon" />
            <input type="text" name="name" id="name" placeholder="Name" />
            <br />
          </div>
          <div style={{ position: "relative" }}>
            <img src={Mail_2} alt="Mail icon" className="FormIcon" />
            <input type="email" name="email" id="email" placeholder="Email" />
            <br />
          </div>
          <div style={{ position: "relative" }}>
            <img src={Msg} alt="Message icon" className="FormIcon" />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
          </div>
          <div style={{ position: "relative", width: "max-content" }}>
            <img
              src={RightArrow}
              alt="Message icon"
              style={{
                width: "30px",
                position: "absolute",
                top: "20px",
                right: "20px",
              }}
            />
            <input type="submit" value="Let Talk" />
          </div>
        </form>
      </RegisterForm>
    </Flexbox>
  );
};
const Flexbox = styled.div`
  display: flex;
`;
const Text = styled.div`
  width: 40%;
  color: #0b1b35;
  h2 {
    color: #0b1b35;
    font-family: "Inter", sans-serif;
    padding: 5px;
  }
  .Textbody {
    padding-top: 10px;
    width: 80%;
    p {
      color: #666;
    }
    .Contact_info {
      padding-top: 15px;
      h4 {
        margin: 5px 0 5px 0;
      }
      img {
        padding: 10px;
      }
    }
  }
`;

const RegisterForm = styled.div`
  width: 60%;
  font-family: "Inter", sans-serif;
  h2 {
    color: #0b1b35;
    font-family: "Inter", sans-serif;
  }
  input {
    width: 90%;
    padding: 12px;
    margin: 5px;
    border: solid orange 2px;
    border-radius: 5px;
    font-size: 15px;
  }
  input[type="submit"] {
    width: max-content;
    padding: 15px;
    padding-right: 50px;
    color: white;
    background: orange;
    font-size: 20px;
    transition: 0.5s;
  }
  input[type="submit"]:hover {
    border: solid 3px orange;
    background-color: #e84949;
  }

  textarea {
    width: 90%;
    padding: 12px;
    margin: 5px;
    border: solid orange 2px;
    border-radius: 5px;
    font-size: 15px;
  }
  .FormIcon {
    position: absolute;
    top: 15px;
    right: 11%;
    width: 25px;
  }
`;
export default Register;
