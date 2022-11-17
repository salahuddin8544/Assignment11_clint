import React from 'react';

const Review = ({review}) => {
    const {name,email,message,address,reviewTitle,image} = review
    return (
        <div className='grid gap-5 gird-cols-1 md:grid-cols-2 lg:grid-cols-4 border m-2'>
           <div>
           <img className='w-30 h-30' src={image} alt="" />
           </div>
           <p> {name}</p>
           <p> {name}</p>
           <p> {name}</p>
        </div>
    );
};

export default Review;