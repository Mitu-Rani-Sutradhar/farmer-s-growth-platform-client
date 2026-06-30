import React, { use } from "react";
import { Link } from "react-router";

// Fetch Data
const CropsPromise = fetch(
  "https://farmer-s-growth-platform-server.vercel.app/crops"
).then((res) => res.json());

const AllCrops = () => {
  const crops = use(CropsPromise);

  return (
    <div className="text-black">
      <h1 className="text-3xl font-bold text-center my-8">
        All Crops
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
        {crops.map((crop) => (
          <div
            key={crop._id}
            className="h-[420px] w-[320px] bg-white rounded-lg shadow-2xl mx-auto text-black"
          >
            <img
              className="h-[200px] w-[300px] mx-auto py-3 rounded-lg object-cover"
              src={crop.image}
              alt={crop.name}
            />

            <div className="px-5">
              <h2 className="text-2xl font-bold text-center mb-3 text-black">
                {crop.name}
              </h2>

              <p className="text-black mb-2">
                <span className="font-semibold">Description:</span>{" "}
                {crop.description}
              </p>

              <p className="font-semibold text-black mb-4">
                Price: {crop.pricePerUnit} Tk
              </p>
            </div>

            <div className="flex justify-center">
              <Link
                to={`/cropDetails/${crop._id}`}
                className="btn bg-orange-200 hover:bg-orange-300 text-black border-none"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCrops;