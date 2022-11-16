import React from 'react';
import img1 from '../../../assets/images/about/about1.jpg'
import img2 from '../../../assets/images/about/about2.jpg'
import img3 from '../../../assets/images/about/about3.jpg'
const About = () => {
    return (
        <div className='grid gap-5 gird-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className='rounded' src={img1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
               
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img2} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
               
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img3} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
               
                </div>
            </div>
    );
};


export default About;