import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStarHalfAlt } from "react-icons/fa";
const Details = () => {
    const {_id,img,price,title,description,rate} = useLoaderData()
    return (
        <div className="hero min-h-screen bg-base-200 justify-around">
        <div className="hero-content flex-col lg:flex-row-reverse ">
      
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <img src={img} alt="" />
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{price}</p>
                <div className=''>
                    <p className='flex'>{rate} <FaStarHalfAlt></FaStarHalfAlt> <FaStarHalfAlt></FaStarHalfAlt> <FaStarHalfAlt></FaStarHalfAlt></p>
                </div>
                <p>{description}</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Details;