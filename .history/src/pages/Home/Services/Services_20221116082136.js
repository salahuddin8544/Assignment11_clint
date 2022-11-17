import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
const [services, setServices] = useState([])
useEffect(()=>{
    fetch('https://photography-assignment11-server.vercel.app')
    .then(res=>res.json())
    .then(data=>setServices(data))
},[])
    return (
       <div>
         <div className='text-center'>
            <p className="text-2xl font-bold text-orange-600 mb-3">My Services </p>
        </div>
        <div className='grid gap-5 gird-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                services.map(service=><ServiceCard 
                    key={service._id}
                    service = {service}
                    >

                    </ServiceCard>)
            }
        </div>
        <div className='text-center'>
        <Link to={'/allServices'}>
        <button className="btn btn-warning">See All</button>
        </Link>
        </div>
       </div>
    );
};

export default Services;