import React from "react";

const courses = [
  {
    title: "1. Video Courses",
    desc: `Short, structured video modules on specific crop cycles or technology use. Ideal for visual learners.

• 5-Day Workshop on Drip Irrigation Setup
• Mastering Soil Testing: A Video Guide
• Understanding Digital Mandi Price Analysis`,
  },
  {
    title: "2. Expert Webinars",
    desc: `Live or recorded sessions with agronomists, research scientists, or financial advisors.

• Live Q&A: Preparing Your Kharif Crop for the Monsoon Season
• Webinar: The Future of Agri-Financing`,
  },
  {
    title: "3. Farmer Success Blueprints",
    desc: `Case studies and step-by-step guides detailing how a specific farmer achieved success using a new technology.

• Blueprint: How to Achieve 25% Higher Yield Using Regenerative Practices
• Success Story of Smt. Laxmi's Organic Vegetable Farm`,
  },
];

const Pathshala = () => {
  return (
    <div className="py-10 px-5 text-black">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-black">
        Krishi-Pathshala: Master Modern Farming Techniques
      </h1>

      <p className="text-sm sm:text-base md:text-lg py-3 text-center max-w-3xl mx-auto text-black">
        A centralized hub for free, organized, and short-form digital courses,
        <br className="hidden md:inline" /> video tutorials, and webinars conducted by
        agricultural
        <br className="hidden md:inline" /> experts and successful farmers.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-5">
        {courses.map((item, index) => (
          <div
            key={index}
            className="bg-orange-100 rounded-lg shadow-md p-5 text-black"
          >
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold pb-4 text-center underline text-black">
              {item.title}
            </h2>

            <p className="text-sm sm:text-base whitespace-pre-line text-black">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pathshala;