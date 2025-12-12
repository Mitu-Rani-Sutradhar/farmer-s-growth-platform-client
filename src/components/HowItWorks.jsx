import React from 'react';

const HowItWorks = () => {
    return (
        <div className='w-7/12 mx-auto'>

            <h1 className='text-4xl font-bold py-8 text-center'>How It Works</h1>

            <div className='flex justify-between py-5 border-1 p-4 my-3 rounded-xl'>
                <div className='w-[700px]'>
                     <p className='text-red-600'>Step 1:</p>
                     <h1 className='font-bold text-lg'>Digitize Your Farm</h1>
                     <p className=''>(Input)</p>
                </div>
                <div className=''>
                    <p className='justify-center items-center w-[450px]'>We capture everything: GPS boundaries, crop history, soil reports, and real-time weather from external satellites and field sensors.</p>
                </div>
            </div>

            <div className='flex justify-between py-5 border-1 p-4 my-3 rounded-xl'>
                <div className='w-[700px]'>
                     <p className='text-red-600'>Step 2:</p>
                     <h1 className='font-bold text-lg'>Analyze & Predict</h1>
                     <p>(Processing)</p>
                </div>
                <div className=''>
                    <p className='justify-center items-center w-[450px]'>Our AI engine processes all your data to create tailored forecasts for your specific field—predicting yields, identifying risks, and analyzing market trends.</p>
                </div>
            </div>

            <div className='flex justify-between py-5 border-1 p-4 my-3 rounded-xl'>
                <div className='w-[700px]'>
                     <p className='text-red-600'>Step 3:</p>
                     <h1 className='font-bold text-lg'>Receive Action Alerts</h1>
                     <p>(Output)</p>
                </div>
                <div className=''>
                    <p className='justify-center items-center w-[450px]'>Get immediate, prescriptive advice. Receive simple, localized alerts on your phone telling you exactly when and what to do to prevent loss or optimize growth.</p>
                </div>
            </div>

            <div className='flex justify-between py-5 border-1 p-4 my-3 rounded-xl'>
                <div className='w-[700px]'>
                     <p className='text-red-600'>Step 4:</p>
                     <h1 className='font-bold text-lg'>Connect & Transact</h1>
                     <p>(Value Chain)</p>
                </div>
                <div className=''>
                    <p className='justify-center items-center w-[450px]'>Instantly access high-quality inputs, verify market prices, and connect directly with bulk buyers or a community of expert farmers for real-time problem-solving.</p>
                </div>
            </div>

            <div className='flex justify-between py-5 border-1 p-4 my-3 rounded-xl'>
                <div className='w-[700px]'>
                     <p className='text-red-600'>Step 5:</p>
                     <h1 className='font-bold text-lg'>Track & Refine</h1>
                     <p>(Continuous Loop)</p>
                </div>
                <div className=''>
                    <p className='justify-center items-center w-[450px]'>Record your actions in the app. We track performance against predictions to make our AI smarter for your next season, ensuring your growth is continuous and proven.</p>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;