import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons'
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { jobsApply } from '../utilities/fakeDBS';

const JobList = ({data}) => {
    // console.log(data);
    const pdata=useLoaderData();
    // console.log(pdata);

    const [datas,setDatas]=useState({})
    // const [ids,setIds]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setDatas(data))
    },[])

   


    const {id, companyName,jobTitle, jobType, workingType, address, salary}=data;

    return (
        <div className='grid grid-cols-2'>
            {/* <h2 className='text-4xl'>Featured Jobs</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p> */}
            <div className='text-left grid grid-cols-2'> 
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={data.bgImage} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                           {jobTitle}
                        </h2>
                        <p>{companyName}</p>
                        <div className="card-actions justify-start">
                            <div className="badge badge-outline">{workingType}</div>
                            <div className="badge badge-outline">{jobType}</div>
                        </div>
                        <div className='flex justify-between'>
                            <h2><FontAwesomeIcon icon={faLocationDot} />{address}
                            </h2>
                            <h2><FontAwesomeIcon icon={faCircleDollarToSlot} />{salary}
                            </h2>
                        </div>
                    </div>
                   <Link to={`/${id}`}> <button  className="w-36 h-12 bg-gradient-to-r from-blue-400 to-purple-500 p-3 rounded-lg text-white font-semibold ">Start Applying</button></Link>
                </div>
            </div>
            {/* <button className="w-48 h-16 bg-gradient-to-r from-blue-400 to-purple-500 p-3 rounded-lg text-white font-semibold ">Start Applying</button> */}
        </div>
    );
};

export default JobList;