import React from "react";
import "../styles/TeamGallery.css";

export const TeamGallery = () => {
  return (
    <>
      <div className="text-center text-3xl p-10 font-bold text-red-600 bg-white" style={{"color": "#0b1b35"}}>Team Gallery</div>
      <div className="px-20 pb-10 bg-white">

        <div class="flex flex-wrap justify-center">
            <img class="h-auto max-w-full rounded-lg object-cover w-full  lg:w-5/12 md:5/12 m-2" src="members\\1.png" alt=""/>
          
          
            <img class="h-auto max-w-full rounded-lg object-cover w-full  lg:w-5/12 md:5/12 m-2" src="members\\2.jpg" alt=""/>
          
          
            <img class="h-auto max-w-full rounded-lg object-cover w-full  lg:w-5/12 md:5/12 m-2" src="members\\3.jpg" alt=""/>
          
          
            <img class="h-auto max-w-full rounded-lg object-cover w-full  lg:w-5/12 md:5/12 m-2" src="members\\4.jpg" alt=""/>
          
        </div>

      </div>
    </>
  );
};
export default TeamGallery;
