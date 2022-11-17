import React,{useContext,useState,useEffect} from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import TotalReviewsCart from '../AllServices/TotalReviewsCart';

const TotalReviews = () => {
    const {user} = useContext(AuthContext) 
       const [reviews, setReviews] = useState([])
       useEffect(() => {
          
           fetch('https://photography-assignment11-server.vercel.app/reviews')
           .then(res => res.json())
           .then(data => setReviews(data))
       }, [])
    return (
        <div>
        {
            reviews.map(review=><TotalReviewsCart
            key={review._id}
            review={review}
            ></TotalReviewsCart>)
        }
        </div>
    );
};

export default TotalReviews;