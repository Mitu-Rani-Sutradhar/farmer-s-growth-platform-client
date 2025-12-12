import React from 'react';
import { Link } from 'react-router';

const LatestCrop = () => {
    return (
       <div className='w-11/12 mx-auto bg-green-50 rounded-2xl'>
        <h1 className='text-4xl font-bold py-8 text-center'>Latest Crops</h1>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 pb-5'>
            
             <div className='h-[350px] w-[320px] bg-white-50 mx-auto rounded-lg mb-5 shadow-2xl'>
             <img className='h-[200px] w-[300px] mx-auto py-3'  alt="" />
            <div className='font-bold text-xl py-2'>
                
            </div>
             <div className='flex justify-between px-6'>
                <p className=' rounded-xl p-1'>Price- tk</p>
                <p className='rounded-xl p-1 text-red-500'>Rating-</p>
             </div>
             <p className='text-center'>
                <Link to={'/allCrops'} className='btn bg-orange-200 my-3 text-center'>View All</Link>
             </p>
             </div>
        
        </div>

        
       
        </div>
    );
};

export default LatestCrop;