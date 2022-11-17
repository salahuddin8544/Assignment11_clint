import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Review from './Review';

const AllReview = () => {
 const {user} = useContext(AuthContext) 
 console.log(user);
    const [reviews, setReviews] = useState([])
    useEffect(() => {
       
        fetch('https://photography-assignment11-server.vercel.app/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [user?.email])
    
    const handleDelete = id => {
        const proceed = window.confirm('you want to delete this review')
        if(proceed){
            fetch(`https://photography-assignment11-server.vercel.app//reviews/${id}`, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    alert('deleted successfully')
                    const remaining = reviews.filter(rev => rev._id !== id)
                    setReviews(remaining)
                }
            })
        }
   }
    return (
        <div>
            
            {
                reviews.map(review=> <Review 
                    key={review._id}
                    review={review}
                    handleDelete={handleDelete}
                ></Review>)
            }
        </div>
    );
};

export default AllReview;