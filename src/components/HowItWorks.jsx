import React from 'react';

const steps = [
  {
    step: "Step 1:",
    title: "Digitize Your Farm",
    tag: "(Input)",
    desc: "We capture everything: GPS boundaries, crop history, soil reports, and real-time weather from external satellites and field sensors."
  },
  {
    step: "Step 2:",
    title: "Analyze & Predict",
    tag: "(Processing)",
    desc: "Our AI engine processes all your data to create tailored forecasts for your specific field—predicting yields, identifying risks, and analyzing market trends."
  },
  {
    step: "Step 3:",
    title: "Receive Action Alerts",
    tag: "(Output)",
    desc: "Get immediate, prescriptive advice. Receive simple, localized alerts on your phone telling you exactly when and what to do to prevent loss or optimize growth."
  },
  {
    step: "Step 4:",
    title: "Connect & Transact",
    tag: "(Value Chain)",
    desc: "Instantly access high-quality inputs, verify market prices, and connect directly with bulk buyers or a community of expert farmers for real-time problem-solving."
  },
  {
    step: "Step 5:",
    title: "Track & Refine",
    tag: "(Continuous Loop)",
    desc: "Record your actions in the app. We track performance against predictions to make our AI smarter for your next season, ensuring your growth is continuous and proven."
  },
];

const HowItWorks = () => {
  return (
    <div className='w-11/12 md:w-10/12 lg:w-9/12 xl:w-7/12 mx-auto'>

      <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold py-6 md:py-8 text-center'>
        How It Works
      </h1>

      {steps.map((item, index) => (
        <div
          key={index}
          className='flex flex-col md:flex-row md:justify-between gap-3 md:gap-6 py-5 border p-4 my-3 rounded-xl'
        >
          <div className='md:w-2/5 lg:w-1/2'>
            <p className='text-red-600'>{item.step}</p>
            <h1 className='font-bold text-base sm:text-lg'>{item.title}</h1>
            <p>{item.tag}</p>
          </div>
          <div className='md:w-3/5 lg:w-1/2 flex items-center'>
            <p className='text-sm sm:text-base'>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HowItWorks;