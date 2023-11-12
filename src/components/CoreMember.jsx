import React from "react";
import "../styles/CoreMember.css";

const Members = [
  {id:1, name:'Subrajeet',por:'',pic:"members\\Subrajeet.JPG"},
  {id:1, name:'Anshu Kumar',por:'',pic:"members\\anshu kumar CRN head.jpg"},
  {id:1, name:'Nikhil Singh',por:'',pic:"members\\Nikhil singh.jpg"},
  {id:1, name:'Nitesh Kumar',por:'',pic:"members\\Nitish kumar Web head.jpg"},
  {id:1, name:'Rambabu Kumar',por:'',pic:"members\\Rambabu kumar.jpg"},
  {id:1, name:'Suraj Burnwal',por:'',pic:"members\\suraj burnwal crn head.jpg"},
  {id:1, name:'Tushar Kumar',por:'',pic:"members\\tushar kumar pr head.jpg"},
  {id:1, name:'Yashraj SIngh',por:'',pic:"members\\Yashraj singh .jpg"},
]

export const CoreMember = () => {
  return (
    <>
      <div className="coremember bg-white">
        <div className="w-full text-center text-3xl font-bold p-5 text-red-600">
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
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">GEN SEC</p>
            
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
