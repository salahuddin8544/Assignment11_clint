import React,{useContext,useState,useEffect} from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import TotalReviewsCart from '../AllServices/TotalReviewsCart';

const TotalReviews = () => {
    const {user} = useContext(AuthContext) 
       const [reviews, setReviews] = useState([])
       useEffect(() => {
          
           fetch('http://localhost:5000/reviews')
           .then(res => res.json())
           .then(data => setReviews(data))
       }, [])
    return (
        <div className='grid gap-5 gird-cols-1 md:grid-cols-2 lg:grid-cols-3'>\
               <p className="text-4xl font-bold text-orange-700 my-3">My Services </p>
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