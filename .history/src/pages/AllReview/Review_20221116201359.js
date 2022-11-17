import React,{useState,useContext,useEffect} from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
const Review = ({review}) => {

    return (
        <div>
            {review.length}
        </div>
    );
};

export default Review;