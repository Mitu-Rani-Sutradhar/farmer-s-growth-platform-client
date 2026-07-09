import React from "react";
import { motion } from "framer-motion";
import {
  FaVideo,
  FaChalkboardTeacher,
  FaSeedling,
} from "react-icons/fa";

const courses = [
  {
    icon: <FaVideo />,
    title: "Video Courses",
    desc: `Short, structured video modules covering modern farming techniques and digital agriculture tools.

• 5-Day Workshop on Drip Irrigation
• Mastering Soil Testing
• Understanding Digital Market Prices`,
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Expert Webinars",
    desc: `Learn directly from agricultural experts through live and recorded sessions.

• Live Q&A for Seasonal Crop Planning
• Future of Smart Farming
• Modern Agri-Financing Strategies`,
  },
  {
    icon: <FaSeedling />,
    title: "Farmer Success Stories",
    desc: `Discover real success stories and step-by-step farming strategies from experienced farmers.

• Increase Yield by 25%
• Organic Vegetable Farming
• Sustainable Farming Practices`,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const Pathshala = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white via-green-50 to-lime-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-lime-100 text-green-700 px-4 py-1 rounded-full font-semibold mb-4">
            🌾 Learning Center
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-800">
            Krishi Pathshala
          </h2>

          <p className="max-w-3xl mx-auto mt-5 text-gray-600 leading-7">
            Learn modern farming techniques through free video courses,
            expert webinars, and inspiring success stories designed to help
            every farmer grow smarter and earn more.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
              }}
              className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl border border-green-100 p-8 overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute -top-12 -right-12 w-36 h-36 bg-lime-200 rounded-full blur-3xl opacity-40"></div>

              {/* Icon */}
              <motion.div
                initial={{ rotate: -30, scale: 0 }}
                whileInView={{ rotate: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 180,
                }}
                className="relative w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center text-3xl mb-6"
              >
                {course.icon}
              </motion.div>

              {/* Title */}
              <h3 className="relative text-2xl font-bold text-green-800 mb-5">
                {course.title}
              </h3>

              {/* Description */}
              <p className="relative whitespace-pre-line text-gray-600 leading-7">
                {course.desc}
              </p>

              {/* Button */}
              <button className="relative mt-8 btn bg-green-600 hover:bg-green-700 border-none text-white rounded-full">
                Explore Course
              </button>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Pathshala;