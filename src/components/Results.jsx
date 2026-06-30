import React from "react";

const stats = [
  { value: "22%", label: "Increased Profit" },
  { value: "85%", label: "Loss Reduction" },
  { value: "150,000+", label: "Community Scale" },
  { value: "18%", label: "Efficiency/Savings" },
];

const Results = () => {
  return (
    <div className="py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-black">
        Our Results in Numbers
      </h1>

      <p className="w-11/12 sm:w-10/12 md:w-8/12 lg:w-[800px] mx-auto text-center text-sm sm:text-base text-black py-4">
        A farmer's decision is ultimately driven by economic benefit and trust.
        This section provides quick, scannable data points (social proof) that
        validate the platform's claims.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-8 md:px-16 lg:px-24 py-8 md:py-10">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-green-300 rounded-xl flex flex-col items-center justify-center text-center"
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold pt-4 text-black">
              {item.value}
            </h1>

            <p className="text-sm sm:text-base md:text-lg px-3 sm:px-6 pb-4 sm:pb-6 pt-2 sm:pt-3 text-black">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;