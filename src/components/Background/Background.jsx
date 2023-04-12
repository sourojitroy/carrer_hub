import React from 'react';

const Background = () => {
    return (
        <div className='lg:flex items-center mt-10 gap-32'>
             <div className='text-left '>
                <h2 className='text-7xl text-black pt-5'>One Step <br /> Closer To Your <br /> <span className='bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>Dream Job</span></h2>
                <p className='py-6 h-32 w-96'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="w-48 h-16 bg-gradient-to-r from-blue-400 to-purple-500 p-3 rounded-lg text-white font-semibold ">Get started</button>
             </div>
             <div>
                <img src="../../../public/hardy.png" alt="" />
             </div>
        </div>
    );
};

export default Background;