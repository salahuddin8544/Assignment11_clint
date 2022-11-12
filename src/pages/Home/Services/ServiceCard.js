import React from 'react';
import {Link} from 'react-router-dom'
const ServiceCard = ({service}) => {
    const {_id,img,price,title} = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
          </h2>
          <p className='text-2xl font-semibold text-orange-600'>price: $ {price}</p>
          <div className="card-actions justify-end">
            <Link to={`/service/:${_id}`}>
            <button className="btn btn-success">Success</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;