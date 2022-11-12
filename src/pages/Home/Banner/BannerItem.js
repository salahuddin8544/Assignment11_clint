import React from 'react';
import './BannerItem.css'
const BannerItem = ({slide}) => {
    const {image,id,prev,next} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className='carousel-img'>
        <img src={image} className="w-full rounded-xl" />
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5  top-1/4">
         <h1 className='text-5xl font-bold text-white'>
            Affordable <br />
            pricing for car <br />
            Servicing 
         </h1>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5  top-1/2 w-1/2">
         <p className=' text-xl text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur hic doloremque corrupti eos! Quibusdam voluptas quam quae nihil? Iure consequatur placeat voluptates voluptatibus nostrum itaque magnam vel harum eos repudiandae.</p>
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 left-5  top-3/4 w-1/2">
        <button className="btn btn-success mr-5">Success</button>
        <button className="btn btn-outline btn-warning">Warning</button>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a> 
          <a href={`#slide${next}`} className="btn btn-circle">❯</a>
        </div>
      </div> 
    );
};

export default BannerItem;