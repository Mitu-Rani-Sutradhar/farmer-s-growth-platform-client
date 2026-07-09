import React, { use } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const LatestCropPromise = fetch(
  "https://farmer-s-growth-platform-server.vercel.app/latest-crops"
).then((res) => res.json());

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const LatestCrop = () => {
  const latestCrops = use(LatestCropPromise);

  return (
    <section className="py-20 bg-gradient-to-b from-white via-green-50 to-lime-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-green-100 text-green-700 font-semibold">
            🌱 Featured Crops
          </span>

          <h2 className="mt-5 text-3xl md:text-5xl font-bold text-green-800">
            Latest Crops
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-gray-600 leading-8">
            Discover the latest agricultural crops shared by farmers. Explore
            premium quality crops, compare prices, and stay connected with
            modern farming innovations.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {latestCrops.map((crop) => (
            <motion.div
              key={crop._id}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-green-100"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                  src={crop.image}
                  alt={crop.name}
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-2xl font-bold text-green-800">
                  {crop.name}
                </h3>

                <p className="mt-3 text-gray-600 leading-7 line-clamp-3">
                  {crop.description}
                </p>

                <div className="mt-6 flex items-center justify-between">

                  <span className="px-4 py-2 rounded-full bg-lime-100 text-green-700 font-bold">
                    ৳ {crop.pricePerUnit}
                  </span>

                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/all-crops"
                      className="btn bg-green-600 hover:bg-green-700 border-none text-white rounded-full px-6"
                    >
                      View All
                    </Link>
                  </motion.div>

                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default LatestCrop;