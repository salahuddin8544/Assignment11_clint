import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Chekout = () => {
    const service = useLoaderData();
    console.log(service);
    return (
        <div>
            <h2>hello</h2>
        </div>
    );
};

export default Chekout;