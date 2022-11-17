import React from 'react';

const Review = ({review}) => {
    const {name,email,message} = review
    return (
        <div>
            <h2>Is is reveww {review.length}</h2>
        </div>
    );
};

export default Review;