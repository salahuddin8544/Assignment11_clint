import React, { useEffect, useState } from 'react';
import AllServicesCard from './AllServicesCard';

const AllServices = () => {
    const [services, setServices] = useState([])
useEffect(()=>{
    fetch('https://photography-assignment11-server.vercel.app/allServices')
    .then(res=>res.json())
    .then(data=>setServices(data))
},[])
    return (
        <div>
         <div className='text-center'>
            <p className="text-2xl font-bold text-orange-600">Services</p>
        </div>
        <div className='grid gap-5 gird-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      
            {
                services.map(service=><AllServicesCard
                    key={service._id}
                    service={service}
                >

                </AllServicesCard>)
            }
        </div>
       </div>
    );
};

export default AllServices;