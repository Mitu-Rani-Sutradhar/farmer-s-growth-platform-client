import React from "react";
import { motion } from "framer-motion";

const stats = [
  {
    value: "22%",
    label: "Higher Crop Profit",
  },
  {
    value: "85%",
    label: "Reduced Crop Loss",
  },
  {
    value: "150K+",
    label: "Farmers Connected",
  },
  {
    value: "18%",
    label: "Improved Efficiency",
  },
];

// Container Animation
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Card Animation
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Results = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-green-50 via-white to-lime-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1 bg-lime-100 text-green-700 rounded-full font-semibold mb-4">
            📊 Our Impact
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-800">
            Results That Inspire Confidence
          </h2>

          <p className="max-w-3xl mx-auto mt-5 text-gray-600 leading-7 text-sm md:text-base">
            Digital Agriculture empowers farmers with smart technologies,
            real-time insights, and data-driven decisions that improve
            productivity, reduce crop losses, and create sustainable farming
            opportunities.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -12,
                scale: 1.05,
                rotate: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 220,
              }}
              className="relative bg-white rounded-2xl p-8 text-center shadow-lg border border-green-100 overflow-hidden cursor-pointer"
            >
              {/* Background Glow */}
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-lime-200 rounded-full blur-3xl opacity-40"></div>

              {/* Number */}
              <motion.h3
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 180,
                }}
                className="relative text-4xl lg:text-5xl font-extrabold text-green-600 mb-4"
              >
                {item.value}
              </motion.h3>

              {/* Label */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.25 + index * 0.15,
                  duration: 0.5,
                }}
                className="relative text-gray-700 font-medium text-sm md:text-base"
              >
                {item.label}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Results;