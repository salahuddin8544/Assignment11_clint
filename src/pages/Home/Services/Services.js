import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
const [services, setServices] = useState([])
useEffect(()=>{
    fetch('http://localhost:5000/services')
    .then(res=>res.json())
    .then(data=>setServices(data))
},[])
    return (
       <div>
         <div className='text-center'>
            <p className="text-2xl font-bold text-orange-600">Services</p>
            <h2 className='font-semi-bold'>Our Service Area</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam esse quos accusamus maiores architecto itaque pariatur aperiam vel illo ut?</p>
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
       </div>
    );
};

export default Services;