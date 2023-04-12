import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDollarToSlot, faCalendar, faPhone, faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { useLoaderData, useParams } from 'react-router-dom';
import { addToDb } from '../utilities/fakedb';
import { jobsApply } from '../utilities/fakeDBS';
import { ToastContainer, toast } from 'react-toastify';

const SingleCard = () => {
    const { loadId } = useParams();
    const loadsData = useLoaderData();
    console.log(loadsData)
    console.log(loadId);

    const [fetchData, setFetchData] = useState({});
    const [jobList, setJobList] = useState([])

    useEffect(() => {
        const loadData = loadsData.find(job => job.id == loadId);
        setFetchData(loadData)
    }, [])

    const handleApplyJob = id => {
        handleApplyJob(id)
        toast("Wow so easy !")
        
    }




    // useEffect(() => {
    //     fetch('data.json')
    //         .then(res => res.json())
    //         .then(data => setFetchData(data))
    // }, [])
    // // console.log(fetchData);
    // useEffect(() => {
    //     const storedCart = getShoppingCart();
    //     const savedCart = [];
    //     for (const id in storedCart) {
    //         const addedProduct = fetchData.find(product => product.id === id)
    //         if (addedProduct){
    //             const quantity = storedCart[id];
    //             addedProduct.quantity= quantity;
    //             savedCart.push(addedProduct)
    //         }


    //     }
    //     setJobList(savedCart)
    // }, [fetchData])

    const addToCart = (id) => {
        console.log(id);
        addToDb(id)
    }

    return (
        <div>
            <h2 className='text-4xl mt-12 mb-4'>Job Details</h2>
            <div className='flex justify-between mt-36'>
                <div className='text-left'>
                    <p className='mb-10'><span className='text-black font-semibold'>Job Description:</span>{fetchData.jobDescription}</p>
                    <p className='mb-10'><span className='text-black font-semibold'>Job Responsibility:</span> {fetchData.jobResponsibility}</p>
                    <p className='mb-10'><span className='text-black font-semibold'>Educational Requirements:</span> <br />{fetchData.educationalRequirment}</p>
                    <p className='mb-10'><span className='text-black font-semibold'>Experiences:</span> <br /> {fetchData.expericence}</p>
                </div>
                <div className='text-left'>
                    <div className='mb-8'>
                        <h4 className='text-2xl font-semibold text-black mb-4 '>Job Details</h4>
                        <hr />
                        <h3 className='mt-4 mb-2'><FontAwesomeIcon icon={faCircleDollarToSlot} /> <span className='text-[#474747] text-xl'>Salary :</span> {fetchData.salary}</h3>
                        <h3 className='mb-4'><FontAwesomeIcon icon={faCalendar} /> <span className='text-[#474747] text-xl'>Job Title :</span>  {fetchData.jobTitle}</h3>

                        <h4 className='text-2xl font-semibold text-black mb-4 '>Contact Information</h4>
                        <hr />
                        <h3 className='mt-4 mb-2'><FontAwesomeIcon icon={faPhone} /> <span className='text-[#474747] text-xl'>Phone :</span>  {fetchData.phone}</h3>
                        <h3 className='mb-2'><FontAwesomeIcon icon={faMailBulk} /> <span className='text-[#474747] text-xl'>Email :</span>{fetchData.email}</h3>
                        <h3 className='mb-4'><FontAwesomeIcon icon={faMailBulk} /> <span className='text-[#474747] text-xl'>Address :</span>  {fetchData.address}</h3>
                    </div>
                    <button onClick={() => handleApplyJob(fetchData.id)} className="w-48 h-16 bg-gradient-to-r from-blue-400 to-purple-500 p-3 rounded-lg text-white font-semibold ">Start Applying</button>
                    <ToastContainer />
                </div>

            </div>
        </div>
    );
};

export default SingleCard;