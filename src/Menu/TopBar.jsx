import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { MdAddCall } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FaFacebook, FaYoutube, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import logoImg from '../assets/Logo/ICCL.jpg';
import './TopBar.css';
import { NavLink } from 'react-router-dom';

const TopBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Media query hooks
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {!isMobile && (
        <div id="contact_info" className="topbar h-8 flex justify-between bg-slate-100 ">
          <div className="contact-info pl-8 flex items-center space-x-4">
            <a href="#" className="flex items-center">
              <span className="pl-2 text-black">Have Any Question?</span>
            </a>
            <a href="#" className="flex items-center">
              <MdAddCall className='text-pink-500' />
              <span className="pl-2 text-black">01735-231302</span>
            </a>
            <span className="hidden md:flex items-center justify-items-center te pl-4">
              <IoIosMail className='text-pink-500 text-center' />
              <span className="pl-2">pekul.erp@icclbd.com</span>
            </span>
          </div>
          <div id='top-socials' className="md:flex items-center space-x-4">
            <a href="https://web.facebook.com/profile.php?id=2002321963131829&paipv=0&eav=AfZlWkTLD5YnY6sFfN-jmUs1z54a6b5spG7f3s9vjMRVSd4xWnomP0byHlNGgwsrSRE&_rdc=1&_rdr" className="text-xl" target="_blank"><FaFacebook className='text-pink-500' /></a>
            <a href="https://www.linkedin.com/company/international-classic-composite-ltd/?originalSubdomain=bd" target="_blank" className="text-xl"><FaLinkedinIn className='text-pink-500' /></a>
            <a href="" className="text-xl"><FaYoutube className='text-pink-500' /></a>
            <a href="" className="text-xl pr-8"><FaWhatsapp className='text-pink-500' /></a>
          </div>
        </div>
      )}
      <div className={`navbar sticky z-20 top-0 w-full bg-slate-500 transition-all duration 300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="navbar-start">
          {isMobile && (
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" onClick={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              {menuOpen && (
                <ul tabIndex={0} className="menu menu-sm dropdown-content bg-slate-500 text-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
                  <li className=''><NavLink to="/">Home</NavLink></li>
                  <li>
                    <NavLink to="#" className="">About ICCL</NavLink>
                    <ul className="p-2">
                      <li><NavLink to="/about2">About Us</NavLink></li>
                      <li><NavLink to="/Certification">Certification</NavLink></li>
                      <li><NavLink to="/SisterConcern">Sister Concern</NavLink></li>
                      <li><NavLink to="/BoardOf">Board Of Directors</NavLink></li>
                    </ul>
                  </li>
                  <li><NavLink to="/service">Service</NavLink></li>
                  <li><NavLink to="/Products">Products</NavLink></li>
                   <li><NavLink to="/photos">Gallary</NavLink></li>
                  <li><NavLink to="/testimonial">Testimonials</NavLink></li>
                  <li><NavLink to="/Contact">Contact</NavLink></li>
                </ul>
              )}
            </div>
          )}
          <a className="text-xl"><img className="h-12 pl-8 m-0 p-0" src={logoImg} alt="ICCL Logo" /></a>
        </div>
        {isDesktop && (
          <div className="navbar-center text-white hidden lg:flex md:flex">
            <ul className="menu menu-horizontal flex justify-items-start items-center px-1">
              <li>
                <NavLink to="/" className="relative group">
                  <span className="group-hover:text-pink-500 transition duration-300">Home</span>
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
                </NavLink>
              </li>
              <div className="group">
                <li>
                  <a href='#' className="relative group">
                    <span className="cursor-pointer hover:text-pink-500 transition duration-300">About ICCL</span>
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
                  </a>
                </li>
                <ul className="dropdown-content absolute hidden group-hover:block bg-slate-500 rounded-box z-[1] w-52 p-2 shadow">
                  <li>
                    <NavLink to="/about2" className="">
                      <span className="hover:text-pink-500 transition duration-300">About Us</span>
                      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-pink-500 transform scale-x-0 hover:scale-x-100 transition-transform duration-300 ease-out origin-left">Service</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/Certification" className="">
                      <span className="hover:text-pink-500 transition duration-300">Certification</span>
                      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-pink-500 transform scale-x-0 hover:scale-x-100 transition-transform duration-300 ease-out origin-left">Service</span>
                    </NavLink>
                  </li>
                  <li className=''>
                    <NavLink to="/SisterConcern" className="">
                      <span className="hover:text-pink-500 transition duration-300">Sister Concern</span>
                      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-pink-500 transform scale-x-0 hover:scale-x-100 transition-transform duration-300 ease-out origin-left">Service</span>
                    </NavLink>
                  </li>
                  <li className=''>
                    <NavLink to="/BoardOf" className="">
                      <span className="hover:text-pink-500 transition duration-300">Board Of Directors</span>
                      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-pink-500 transform scale-x-0 hover:scale-x-100 transition-transform duration-300 ease-out origin-left">Service</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
              <li>
                <NavLink to="/service" className="relative group">
                  <span className="group-hover:text-pink-500 transition duration-300">Service</span>
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/Products" className="relative group">
                  <span className="group-hover:text-pink-500 transition duration-300">Products</span>
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/photos" className="relative group">
                  <span className="group-hover:text-pink-500 transition duration-300">Gallery</span>
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/testimonial" className="relative group">
                  <span className="group-hover:text-pink-500 transition duration-300">Testimonials</span>
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/Contact" className="relative group">
                  <span className="group-hover:text-pink-500 transition duration-300">Contact</span>
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
                </NavLink>
              </li>

            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default TopBar;
