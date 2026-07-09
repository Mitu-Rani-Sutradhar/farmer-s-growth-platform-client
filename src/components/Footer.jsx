import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLeaf,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-900 via-green-800 to-green-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-lime-400 text-green-900 p-3 rounded-full text-2xl">
                <FaLeaf />
              </div>

              <h2 className="text-3xl font-bold">
                Digital Agriculture
              </h2>
            </div>

            <p className="text-green-100 leading-7">
              Empowering farmers through smart technology, modern farming
              techniques, and digital innovation for a sustainable future.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-semibold mb-5 text-lime-300">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              <Link
                to="/"
                className="hover:text-lime-300 transition duration-300"
              >
                Home
              </Link>

              <Link
                to="/allCrops"
                className="hover:text-lime-300 transition duration-300"
              >
                All Crops
              </Link>

              <Link
                to="/about"
                className="hover:text-lime-300 transition duration-300"
              >
                About Us
              </Link>

              <Link
                to="/contact"
                className="hover:text-lime-300 transition duration-300"
              >
                Contact
              </Link>

              <Link
                to="/privacy"
                className="hover:text-lime-300 transition duration-300"
              >
                Privacy Policy
              </Link>
            </div>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-semibold mb-5 text-lime-300">
              Follow Us
            </h3>

            <p className="text-green-100 mb-6">
              Stay connected for the latest farming tips, crop updates,
              and agricultural innovations.
            </p>

            <div className="flex gap-4">

              <motion.a
                whileHover={{ scale: 1.2, rotate: 10 }}
                href="#"
                className="w-12 h-12 rounded-full bg-white text-green-700 flex items-center justify-center text-xl"
              >
                <FaFacebookF />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2, rotate: 10 }}
                href="#"
                className="w-12 h-12 rounded-full bg-white text-green-700 flex items-center justify-center text-xl"
              >
                <FaInstagram />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2, rotate: 10 }}
                href="#"
                className="w-12 h-12 rounded-full bg-white text-green-700 flex items-center justify-center text-xl"
              >
                <FaXTwitter />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2, rotate: 10 }}
                href="#"
                className="w-12 h-12 rounded-full bg-white text-green-700 flex items-center justify-center text-xl"
              >
                <FaLinkedinIn />
              </motion.a>

            </div>
          </motion.div>

        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-green-700 mt-12 pt-6 text-center"
        >
          <p className="text-green-100 text-sm md:text-base">
            © 2026 <span className="font-semibold text-lime-300">Digital Agriculture</span>. All Rights Reserved.
          </p>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;