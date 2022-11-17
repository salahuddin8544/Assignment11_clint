import React from 'react';

const Review = ({review}) => {
    const {name,email,message,address,reviewTitle} = review
    return (
        <div className='grid gap-5 gird-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {name}
            {review.length}
            <h2>Helo</h2>
        </div>
    );
};

export default Review;