import React from 'react';
import img1  from '../../../assets/images/Carousel/1.jpg'
import img2  from '../../../assets/images/Carousel/2.jpg'
import img3  from '../../../assets/images/Carousel/3.jpg'
import img4  from '../../../assets/images/Carousel/4.jpg'
import BannerItem from './BannerItem';
const Banner = () => {
    const bannerData =[
        {
            image: img1,
            prev:4,
            id:1,
            next: 2
        },
        {
            image: img2,
            prev:1,
            id:2,
            next: 3
        },
        {
            image: img3,
            prev:2,
            id:3,
            next: 4
        },
        {
            image: img4,
            prev:3,
            id:4,
            next: 1
        }
    ]
    return (
        <div>
           <div className='text-center text-2xl '>
           <h3 className='pb-2 text-6xl'>Welcome to <br /> <br /> <span><span className='text-orange-500'>SU</span> Photography</span></h3>
           </div>
            <div className="carousel w-3/4 py-2 mx-auto">
        {
            bannerData.map(slide => <BannerItem
            key={slide.id} slide ={slide}></BannerItem>)
        }
</div>
        </div>
    );
};

export default Banner;