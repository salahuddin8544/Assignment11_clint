import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';


const PrivatRoute = ({children}) => {
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

export default PrivatRoute;