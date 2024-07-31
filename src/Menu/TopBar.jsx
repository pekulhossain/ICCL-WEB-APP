import { useState, useEffect } from 'react';

import { MdAddCall } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import logoImg from '../assets/Logo/ICCL.jpg';
import './TopBar.css';
import { NavLink } from 'react-router-dom';
const TopBar = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const NavOption = <>
   <div
      className={`navbar sticky z-20 top-0 w-full bg-pink-500 transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-4'
      }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-pink-500 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a>Home</a></li>
              <li>
                <a>About ICCL</a>
                <ul className="p-2">
                <li><a>About Us</a></li>
                <li><a>Certification</a></li>
                <li><a>Sister Concern</a></li>
                <li><a>Core Value</a></li>
                </ul>
              </li>
              <li><a>Service</a></li>
            <li><a>Products</a></li>
            <li><a>Testimonials</a></li>
            <li><a>Contact</a></li>
            </ul>
          </div>
          
          <a className="text-xl"><img className="h-12 pl-8 m-0 p-0" src={logoImg} alt="" /></a>
        </div>
        <div className="navbar-center text-white hidden lg:flex">
          <ul className="menu menu-horizontal flex justify-items-start items-center px-1">
            <NavLink to="/"><li className=''><a>Home</a></li></NavLink>
            <div className="dropdown dropdown-hover">
              <ul>
              <li tabIndex={0} role="" className=""><a>About ICCL</a></li>
              </ul>
              <ul tabIndex={0} className="dropdown-content menu bg-pink-500 rounded-box z-[1] w-52 p-2 shadow">
               <NavLink to="/about2"> <li className=''><a>About Us</a></li></NavLink>
               <NavLink to="/Certification"> <li className=''><a>Certification</a></li></NavLink>
               <NavLink to="/SisterConcern"> <li className=''><a>SisterConcern</a></li></NavLink>
               
              </ul>
            </div>
            <NavLink to="/service"><li className=''><a>Service</a></li></NavLink>
            <NavLink to="/Products"><li className=''><a>Products</a></li></NavLink>
            <NavLink to="/testimonial"><li className=''><a>Testimonial</a></li></NavLink>
            <NavLink to="/Contact"><li className=''><a>Contact</a></li></NavLink>
            
          </ul>
        </div>
        {/* <div className="navbar-end">
          <a className="btn">Button</a>
        </div> */}
      </div>
  </>

  return (

    <>
      <div id="contact_info" className="topbar  h-8 flex justify-between bg-slate-600 text-white">
        <div className="contact-info pl-8 flex items-center space-x-4">
          <a href="tel:+09028464066" className="flex items-center">
            <span className="pl-2">Have Any Question?</span>
          </a>
          <a href="tel:+021123456789" className="flex items-center">
            <MdAddCall></MdAddCall>
            <span className="pl-2">01735-231302</span>
          </a>
          <span className="hidden md:flex items-center pl-4">
            <IoIosMail></IoIosMail>
            <span className="pl-2">pekul.erp@icclbd.com</span>
          </span>
        </div>
        <div id='top-socials' className="md:flex items-center space-x-4">
          <a href="" className="text-xl"><FaFacebook></FaFacebook></a>
          <a href="" className="text-xl"><FaYoutube></FaYoutube></a>
          <a href="" className="text-xl"><FaLinkedinIn></FaLinkedinIn></a>
          <a href="" className="text-xl pr-8"><FaWhatsapp></FaWhatsapp></a>
        </div>
      </div>
     {NavOption}
    </>


  );
};

export default TopBar;


{/* <div className="contact-info flex items-center space-x-4">
          <a href="tel:+09028464066" className="flex items-center">

            <span className="pl-2">Have Any Question?</span>
          </a>
          <a href="tel:+021123456789" className="flex items-center">
            <MdAddCall></MdAddCall>
            <span className="pl-2">01735-231302</span>
          </a>
          <span className="hidden md:flex items-center pl-4">
            <IoIosMail></IoIosMail>
            <span className="pl-2">pekul.erp@icclbd.com</span>
          </span>
        </div>
        <div id='top-socials' className="md:flex items-center space-x-4">
          <a href="" className="text-xl"><FaFacebook></FaFacebook></a>
          <a href="" className="text-xl"><FaYoutube></FaYoutube></a>
          <a href="" className="text-xl"><FaLinkedinIn></FaLinkedinIn></a>
          <a href="" className="text-xl"><FaWhatsapp></FaWhatsapp></a>
        </div> */}