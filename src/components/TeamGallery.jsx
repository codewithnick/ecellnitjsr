import React from "react";
import "../styles/TeamGallery.css";

export const TeamGallery = () => {
  return (
    <>
      <div className="text-center text-3xl p-10 font-bold text-red-600 bg-white">Team Gallery</div>
      <div className="px-20 pb-10 bg-white">

        <div class="grid grid-cols-2 gap-2">
          <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt=""/>
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt=""/>
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt=""/>
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt=""/>
          </div>
        </div>

      </div>
    </>
  );
};
export default TeamGallery;
