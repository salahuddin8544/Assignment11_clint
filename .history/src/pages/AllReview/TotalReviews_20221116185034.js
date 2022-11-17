import React,{useContext,useState,useEffect} from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const TotalReviews = () => {
    const {user} = useContext(AuthContext) 
    console.log(user);
       const [reviews, setReviews] = useState([])
       useEffect(() => {
          
           fetch('http://localhost:5000/reviews')
           .then(res => res.json())
           .then(data => setReviews(data))
       }, [user?.email])
    return (
        <div>
        <h2 className='text-red'>see All</h2>
        </div>
    );
};

export default TotalReviews;