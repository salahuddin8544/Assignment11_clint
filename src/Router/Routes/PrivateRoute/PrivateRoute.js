import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const PrivateRoute = () => {
    const location  = useLocation()
    const {user,loading} = useContext(AuthContext);
    if(loading){
        return   <button className="btn loading">loading</button>
    }
  
    if(!user){
        
        return <Navigate to= '/login' state={{ from: location }} replace > </Navigate>
      
    }
    return  children ;


};

export default PrivateRoute;

