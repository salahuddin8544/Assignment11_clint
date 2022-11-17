import React from 'react';
import {Link} from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
const ServiceCard = ({service}) => {
    const {_id,img,price,title,description} = service;
    <PhotoProvider>
                    <PhotoView src={img}>
                        <img className='w-full h-72' src={img} alt="" />
                    </PhotoView>
                </PhotoProvider>

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
          </h2>
          <p>{description.slice(0,100)+'..'}</p>
          <p className='text-2xl font-semibold text-orange-600'>price: $ {price}</p>
          <div className="card-actions justify-end">
            <Link to={`/services/${_id}`}>
            <button className="btn btn-success">See Details</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;