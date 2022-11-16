import React from 'react';
import './BannerItem.css'
const BannerItem = ({slide}) => {
    const {image,id,prev,next} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full h-96">
        <div className='carousel-img w-full'>
        <img  src={image} className="w-full rounded-xl  h-96"  />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href={`#slide${prev}`} className="btn btn-circle me-5">❮</a> 
          <a href={`#slide${next}`} className="btn btn-circle">❯</a>
        </div>
      </div> 
    );
};

export default BannerItem;