import React from 'react';

const Results = () => {
    return (
        <div className='mx-auto bg-gray-100'>
            <h1 className='text-4xl font-bold py-8 text-center'>Our Results in Numbers</h1>
            <p className='w-[800px] mx-auto'>A farmer's decision is ultimately driven by economic benefit and trust. This section provides quick, scannable data <br /> points (social proof) that validate the platform's claims.</p>

            <div className='flex justify-between px-45 py-10'>
                <div className='bg-green-300 rounded-xl'>
                    <h1 className='text-3xl font-bold text-center pt-4'>22%</h1>
                    <p className='text-lg px-6 pb-6 pt-3'>Increased Profit</p>
                </div>
                <div className='bg-green-300 rounded-xl'>
                    <h1 className='text-3xl font-bold text-center pt-4'>85%</h1>
                    <p className='text-lg px-6 pb-6 pt-3'>Loss Reduction</p>
                </div>
                <div className='bg-green-300 rounded-xl'>
                    <h1 className='text-3xl font-bold text-center pt-4'>150,000 + </h1>
                    <p className='text-lg px-6 pb-6 pt-3'>Community Scale</p>
                </div>
                <div className='bg-green-300 rounded-xl'>
                    <h1 className='text-3xl font-bold text-center pt-4'>18%</h1>
                    <p className='text-lg px-6 pb-6 pt-3'>Efficiency/Savings</p>
                </div>
            </div>
        </div>
    );
};

export default Results;