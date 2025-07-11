import React from 'react';
import { useLoaderData } from 'react-router';

const Applications = () => {
    const data=useLoaderData()
    console.log(data)
    return (
        <div>
            
        </div>
    );
};

export default Applications;