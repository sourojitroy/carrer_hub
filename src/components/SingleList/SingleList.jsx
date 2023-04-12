import React from 'react';

const SingleList = ({card}) => {
    const{jobTitle, jobAvailabe,bgImage}=card;
    return (
        <div className='mx-6'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={bgImage} alt="Shoes" /></figure>
                <div className="card-body text-left">
                    <h2 className="card-title">{jobTitle}</h2>
                    <p>{jobAvailabe}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleList;