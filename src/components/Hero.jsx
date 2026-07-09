import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { Link } from "react-router";

import "swiper/css";
import "swiper/css/pagination";

import heroimg1 from "../assets/heroimg1.png";
import heroimg2 from "../assets/heroimg2.png";
import heroimg3 from "../assets/heroimg3.png";
import heroimg4 from "../assets/heroimg4.png";

const slides = [
  {
    image: heroimg1,
    title: "Empowering Digital Agriculture",
    description:
      "Modern technology helps farmers increase productivity, reduce costs, and make smarter decisions for sustainable farming.",
  },
  {
    image: heroimg2,
    title: "Grow Smarter with Innovation",
    description:
      "Digital Agriculture connects farmers with modern tools, weather insights, crop management, and market opportunities.",
  },
  {
    image: heroimg3,
    title: "Sustainable Farming for the Future",
    description:
      "Adopt eco-friendly farming techniques that improve crop quality while protecting soil, water, and biodiversity.",
  },
  {
    image: heroimg4,
    title: "Connecting Farmers Nationwide",
    description:
      "Build a stronger agricultural community by sharing knowledge, discovering new crops, and connecting with fellow farmers.",
  },
];

const Hero = () => {
  return (
   <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-lime-50 to-emerald-100 py-6 lg:py-10">

  {/* Background Glow */}
  <div className="absolute -top-24 -left-24 w-80 h-80 bg-green-300 rounded-full blur-3xl opacity-30"></div>

  <div className="absolute top-1/2 -right-24 w-96 h-96 bg-lime-300 rounded-full blur-3xl opacity-30"></div>

  <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-emerald-200 rounded-full blur-3xl opacity-30"></div>

  <div className="max-w-7xl mx-auto px-4 relative z-10">
    <Swiper
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      spaceBetween={30}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      loop
      className="rounded-3xl overflow-hidden"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">

            {/* Image */}
            <motion.img
              initial={{ scale: 1.15 }}
              animate={{ scale: 1 }}
              transition={{ duration: 6 }}
              src={slide.image}
              alt={slide.title}
              className="w-full h-[280px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-950/90 via-green-900/70 to-lime-900/30 flex items-center">

              <div className="max-w-2xl px-6 md:px-12 lg:px-16">

                <motion.span
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block bg-lime-400 text-green-900 px-5 py-2 rounded-full font-semibold text-sm mb-5"
                >
                  🌱 Digital Agriculture
                </motion.span>

                <motion.h1
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
                >
                  {slide.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-6 text-gray-200 text-sm md:text-lg leading-8 max-w-xl"
                >
                  {slide.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap gap-4 mt-8"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/all-crops"
                      className="btn bg-lime-500 hover:bg-lime-600 border-none text-white rounded-full px-8"
                    >
                      Explore Crops
                    </Link>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/about"
                      className="btn btn-outline border-white text-white hover:bg-white hover:text-green-700 rounded-full px-8"
                    >
                      Learn More
                    </Link>
                  </motion.div>

                </motion.div>

              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>
  );
};

export default Hero;