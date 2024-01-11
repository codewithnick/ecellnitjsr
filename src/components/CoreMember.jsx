import React from "react";
import "../styles/CoreMember.css";

const Members = [
  {id:1, name:'Anish',por:'President',pic:"members\\Rambabu kumar.webp"},
  {id:1, name:'Subrajeet',por:'Vice President',pic:"members\\Subrajeet.webp"},
  {id:1, name:'Yashraj Singh',por:'General Secretary',pic:"members\\Yashraj singh .webp"},
  {id:1, name:'Anshu Kumar',por:'CRN Head',pic:"members\\anshu kumar CRN head.webp"},
  {id:1, name:'Suraj Burnwal',por:'CRN Head',pic:"members\\suraj burnwal crn head.webp"},
  {id:1, name:'Nikhil Singh',por:'Operations Head',pic:"members\\Nikhil singh.webp"},
  {id:1, name:'Rambabu',por:'Operations Head',pic:"members\\Rambabu.webp"},
  {id:1, name:'Tushar Kumar',por:'PR Head External',pic:"members\\tushar kumar pr head.webp"},
  {id:1, name:'Prashant Kumar',por:'PR Head Internal',pic:"members\\Prashant kumar .webp"},
  {id:1, name:'Homi',por:'Creative Head',pic:"members\\Isha.webp"},
  {id:1, name:'Nitesh Kumar',por:'Web Team Head',pic:"members\\Nitish kumar Web head.webp"},
]

export const CoreMember = () => {
  return (
    <>
      <div className="coremember bg-white">
        <div className="w-full text-center text-3xl font-bold p-10 text-red-600" style={{"color": "#0b1b35"}}>
          Core Members
        </div>
        <div className="flex justify-center w-full text-center">
        <div className="flex flex-wrap max-w-max text-center justify-center">
        {Members.map((member) => (
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow w-72 m-5">
          <a href="/">
            <img class="rounded-t-lg w-72 object-cover h-80" src={member.pic} alt="" />
          </a>
          <div class="p-2 text-center">
            <a href="/">
              <h5 class="mb-2 text-xl font-medium tracking-tight text-gray-900">{member.name}</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{member.por}</p>
            
          </div>
        </div>
        ))}
        
        </div>
        </div>



      </div>
    </>
  );
};
export default CoreMember;
