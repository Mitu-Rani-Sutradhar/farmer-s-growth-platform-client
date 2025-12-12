import React from 'react';
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquarePinterest } from "react-icons/fa6";

const Footer = () => {
    return (
       <div className='bg-base-300 h-[200px] mt-10'>
            <footer className="footer w-11/12 mx-auto px-50 py-8 lg:footer flex justify-between items-center sm:footer-horizontal text-base-content">
  
  <nav className=''>
    <h6 className="footer-title"></h6>
    <a className="link link-hover">About</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Privacy Policy</a>
    
  </nav>
  <nav>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4 items-center">
     <a href=""><FaFacebookSquare /></a>
      <a href=""><FaInstagram /></a>
      <a href=""><FaSquarePinterest /></a>
    </div>
  </nav>
 
</footer>
 <div className='mx-auto'>
    <p className='font-semibold text-lg text-center'>“© 2025 Krishi_Link. All rights reserved.”
</p>
  </div>
        </div>
    );
};

export default Footer;