import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Review from './Review';

const AllReview = () => {
 const {user} = useContext(AuthContext) 
 const [reviews, setReviews] = useState([])
 useEffect(() => {       
    fetch(`http://localhost:5000/reviews${user?.email}`)
    .then(res => res.json())
    .then(data => console.log(data))
}, [user?.email])
        const handleDelete = id => {
        const proceed = window.confirm('you want to delete this review')
        if(proceed){
            fetch(`http://localhost:5000//reviews/${id}`, {
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
                
                review ={review}
                handleDelete ={handleDelete}
                ></Review>)
            }
        </div>
    );
};

export default AllReview;