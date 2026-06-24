import React from 'react';
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquarePinterest } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-base-300 mt-10 py-6 md:py-8'>
      <footer className="footer w-11/12 mx-auto px-4 sm:px-8 md:px-16 lg:px-24 py-6 md:py-8 flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 text-base-content">

        <nav className='flex flex-col items-center sm:items-start gap-2'>
          <h6 className="footer-title"></h6>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Privacy Policy</a>
        </nav>

        <nav className='flex flex-col items-center gap-2'>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4 items-center text-xl sm:text-2xl">
            <a href=""><FaFacebookSquare /></a>
            <a href=""><FaInstagram /></a>
            <a href=""><FaSquarePinterest /></a>
          </div>
        </nav>

      </footer>

      <div className='mx-auto px-4'>
        <p className='font-semibold text-sm sm:text-base md:text-lg text-center'>
          © 2025 Krishi_Link. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;