import React from 'react';

const Review = ({review}) => {
    const {name,email,message,address,revie} = review
    return (
        <div>
            <h2>Is is reveww {review.length}</h2>
        </div>
    );
};

export default Review;