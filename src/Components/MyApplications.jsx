import React, { use } from 'react';

const MyApplications = ({myApplicationsPromise}) => {
    const myApplicationsData=use(myApplicationsPromise)
    console.log(myApplicationsData)
    return (
        <div>
            
        </div>
    );
};

export default MyApplications;