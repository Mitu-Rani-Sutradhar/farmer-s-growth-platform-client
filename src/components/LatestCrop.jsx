import React, { use } from 'react';
import { Link } from 'react-router';
const LatestCropPromise = fetch('http://localhost:3000/latest-crops').then(res => res.json());

const LatestCrop = () => {
   const latestCrops = use(LatestCropPromise);
   console.log(latestCrops);
    return (
       <div className='w-11/12 mx-auto bg-green-50 rounded-2xl'>
        <h1 className='text-4xl font-bold py-8 text-center'>Latest Crops</h1>
        
      
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-5'>

            {
               latestCrops.map(latestCrop => 
               <div className='h-[400px] w-[320px] bg-white-50 mx-auto rounded-lg mb-5 shadow-2xl'>
             <img className='h-[200px] w-[300px] mx-auto py-3' src={latestCrop.image} alt="" />
            <div className='font-bold text-xl py-2'>
                <h2 className='text-center'>{latestCrop.name}</h2>
            </div>
             <div className=' justify-between px-6'>
               <p className='rounded-xl p-1 '>Description: {latestCrop.description}</p>
                <p className=' rounded-xl p-1 text-red-500'>Price-{latestCrop.pricePerUnit} tk</p>
                
             </div>
             <p className='text-center'>
                <Link to={'/allCrops'} className='btn bg-orange-200 my-3 text-center'>View All</Link>
             </p>
             </div>
               )
            }
            
                    
        </div>

        
       
        </div>
    );
};

export default LatestCrop;