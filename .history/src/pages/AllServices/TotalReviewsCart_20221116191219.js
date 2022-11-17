import React from 'react';

const TotalReviewsCart = ({review}) => {
    const{reviewTitle,_id,image,message,name}= review

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
    <div className="card-body">
        <h2 className="card-title">{reviewTitle}</h2>
        <p>{message}</p>
        <div className="card-actions justify-end">
    </div>
  </div>
</div>
        </div>
    );
};

export default TotalReviewsCart;