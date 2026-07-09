import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Digitize Your Farm",
    tag: "Input",
    desc: "Capture farm boundaries, crop history, soil reports, weather conditions, and sensor data to create a complete digital profile of your farm.",
  },
  {
    step: "02",
    title: "Analyze & Predict",
    tag: "AI Processing",
    desc: "Our intelligent system analyzes your farm data to predict crop yields, identify diseases, estimate weather risks, and suggest the best farming strategies.",
  },
  {
    step: "03",
    title: "Receive Smart Alerts",
    tag: "Recommendations",
    desc: "Receive timely notifications for irrigation, fertilization, pest control, and harvesting so you can make informed decisions at the right time.",
  },
  {
    step: "04",
    title: "Connect & Trade",
    tag: "Marketplace",
    desc: "Connect with buyers, suppliers, and fellow farmers. Compare market prices and sell your crops through a trusted digital platform.",
  },
  {
    step: "05",
    title: "Track & Improve",
    tag: "Continuous Growth",
    desc: "Monitor your farming progress, compare results with previous seasons, and continuously improve productivity using data-driven insights.",
  },
];


const headingAnimation = {
  hidden: {
    opacity: 0,
    y: -40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};


const cardAnimation = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
};


const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-green-50 via-white to-lime-50">

      <div className="max-w-7xl mx-auto px-4">


        {/* Heading */}

        <motion.div
          variants={headingAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-14"
        >

          <span className="inline-block bg-lime-100 text-green-700 px-5 py-2 rounded-full font-semibold">
            🌱 Easy Process
          </span>


          <h2 className="mt-5 text-3xl md:text-5xl font-bold text-green-800">
            How Digital Agriculture Works
          </h2>


          <p className="max-w-3xl mx-auto mt-5 text-gray-600 leading-8">
            From collecting farm data to connecting with buyers, our platform
            guides farmers through every stage of modern agriculture with
            intelligent technology and real-time insights.
          </p>


        </motion.div>



        {/* Steps */}

        <div className="space-y-8">


          {steps.map((item, index) => (

            <motion.div
              key={item.step}
              variants={cardAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
              }}
              className="flex flex-col md:flex-row items-center gap-6 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition p-6 md:p-8 border border-green-100 border-l-[8px] border-l-green-600"
            >


              {/* Step Number */}

              <motion.div
                whileHover={{
                  rotate: 360,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="flex-shrink-0 w-20 h-20 rounded-full bg-green-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg"
              >
                {item.step}
              </motion.div>



              {/* Content */}

              <div className="flex-1 text-center md:text-left">


                <span className="inline-block bg-lime-100 text-green-700 text-sm font-semibold px-4 py-1 rounded-full mb-3">
                  {item.tag}
                </span>



                <h3 className="text-2xl md:text-3xl font-bold text-green-800 mb-3">
                  {item.title}
                </h3>



                <p className="text-gray-600 leading-7">
                  {item.desc}
                </p>


              </div>


            </motion.div>

          ))}


        </div>


      </div>

    </section>
  );
};


export default HowItWorks;