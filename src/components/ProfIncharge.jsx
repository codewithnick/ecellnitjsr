import React from 'react'
import Professor1 from "../images/professorIncharge.jpg"
import Professor2 from "../images/ranjitprashad.png"
import Professor3 from "../images/RamKrishna.jpg"
import Professor4 from "../images/kanika.jpg"
import styled from 'styled-components'
const ProfIncharge = () => {
  return (
    <Professors>
      <h2>Special Thanks</h2>
    <div className="professorImage">
      <div>
        <img src={Professor1} alt="" />
        <h3>Dr. Ashok Mandal</h3>
      </div>
      <div>
        <img src={Professor2} alt="" />
        <h3>Dr. Ranjit Prasad</h3>
      </div>
      <div>
        <img src={Professor3} alt="" />
        <h3>Dr. Ram Krishna</h3>
      </div>
      <div>
        <img src={Professor4} alt="" />
        <h3>Dr. Kanika Prasad</h3>
      </div>
    </div>
    <div className="professorLines">
      <p> 
          Team E-Cell extends our heartfelt gratitude for your unwavering support and guidance in making our event, Business Conclave 2023, a resounding success.
      </p>
    </div>
    </Professors>
  )
}
const Professors = styled.div`
width: 80%;
margin: auto;
@media (max-width: 400px){
  width: 90%;
}
h2,h3{
  margin-top: 20px;
  text-align: center;
  font-weight: 600;
}
h3{
  @media (max-width: 400px){
    font-size: 11px;
  }
}
.professorImage{
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  justify-content: space-between;
  img{
    height: 250px;
    width: 250px;
    border-radius: 50%;
    @media (max-width: 900px){
      height: 200px;
      width: 200px;
    }
    @media (max-width: 400px){
      height: 100px;
      width: 100px;
    }
  }
}
`;
export default ProfIncharge