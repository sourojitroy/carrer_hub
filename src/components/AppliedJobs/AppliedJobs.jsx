import React from 'react';
import {} from '../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';
import SingleApplyJob from '../SingleApplyJob/SingleApplyJob';

const AppliedJobs = () => {
    // const {products}=useLoaderData();
    // console.log(products);
    const allJobs=useLoaderData();
    console.log(allJobs)
    return (
        <div>
            {
                allJobs.map(job=><SingleApplyJob key={job.id} job={job}></SingleApplyJob>)
            }
        </div>
    );
};

export default AppliedJobs;