import React,{useContext,useState,useEffect} from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

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
        <h2 className='text-red'>see All {reviews.length}</h2>
        </div>
    );
};

export default TotalReviews;