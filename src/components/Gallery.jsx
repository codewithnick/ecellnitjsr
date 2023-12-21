import React from 'react';
import "../styles/Gallery.css";

const gallery = ({imgArr}) => {
    return (
        <div>
            <div className="text-center text-3xl ml-14 m-10 font-bold text-red-600 bg-white" style={{"color": "#0b1b35"}}>Memories</div>
            <div className="gallery">
                <img src={imgArr[0]} alt="#" />
                <img src={imgArr[1]} alt="#" />
                <img src={imgArr[2]} alt="#" />
                <img src={imgArr[3]} alt="#" />
                <img src={imgArr[4]} alt="#" />
                <img src={imgArr[5]} alt="#" />
                <img src={imgArr[6]} alt="#" />
                <img src={imgArr[7]} alt="#" />
                <img src={imgArr[8]} alt="#" />
            </div>
        </div>
    )
}

export default gallery
