import React,{useState,useContext,useEffect} from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
const Review = () => {
    const {user} = useContext(AuthContext) 
    const [reviews, setReviews] = useState([])
    useEffect(() => {
       
        fetch(`https://photography-assignment11-server.vercel.app/reviews/${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [user?.email])
    return (
        <div>
            {reviews.length}
        </div>
    );
};

export default Review;