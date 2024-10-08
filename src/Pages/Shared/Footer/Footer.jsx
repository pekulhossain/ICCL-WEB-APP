import { NavLink } from "react-router-dom";
import { FaSquare, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import iccllogo from '../../../assets/Logo/ICCL2.jpg';

import './Footer.css';
import EffectFades from "./EffectFades";


const Footer = () => {
    return (
        <footer className="responsive-component">
            <div className="bg-neutral text-white py-16">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 align-middle sm:grid-cols-1">
                    <div id="office_address" className="flex flex-col items-center">
                        <img src={iccllogo} alt="ICCL Logo" className="w-32 h-auto" />
                        <h4 className="footer-title mt-4 border-b-2 border-white">Factory Office:</h4>
                        <address className="mt-2 ml-12">
                            International Classic Composite Limited.<br />
                            Naojur, Kodda, Joydebpur,<br />
                             Gazipur, Bangladesh
                        </address>
                    </div>
                    <div id="quick_menus" className="flex flex-col items-center">
                        <h4 className="footer-title uppercase border-b-2 border-white">Quick Menu</h4>
                        <ul className="mt-4 space-y-4">
                            <li className="flex items-center gap-2">
                                <FaSquare className="text-[8px] text-pink-500" />
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaSquare className="text-[8px] text-pink-500" />
                                <NavLink to="/about2">About</NavLink>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaSquare className="text-[8px] text-pink-500" />
                                <NavLink to="/Certification">Certification</NavLink>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaSquare className="text-[8px] text-pink-500" />
                                <NavLink to="/Contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div id="google_mapp" className="flex flex-col items-center">
                        <h4 className="footer-title border-b-2 border-white">ICCL</h4>
                        <div className="h-44 w-64">
                           <EffectFades></EffectFades>
                        </div>
                    </div>
                    <div id="Social_mediass" className="flex flex-col items-center">
                        <h4 className="footer-title border-b-2 border-white">Follow Us</h4>
                        <p className="mt-2">Join us on social media</p>
                        <div className="mt-4 flex space-x-4 text-2xl">
                            <a href="https://web.facebook.com/profile.php?id=2002321963131829&paipv=0&eav=AfZlWkTLD5YnY6sFfN-jmUs1z54a6b5spG7f3s9vjMRVSd4xWnomP0byHlNGgwsrSRE&_rdc=1&_rdr" className="bg-pink-500 p-2 rounded-full" target="_blank"><FaFacebook /></a>
                            <a href="https://www.linkedin.com/company/international-classic-composite-ltd/?originalSubdomain=bd" className="bg-pink-500 p-2 rounded-full" target="_blank"><FaLinkedin /></a>
                            <a href="#" className="bg-pink-500 p-2 rounded-full"><FaSquareTwitter /></a>
                            <a href="#" className="bg-pink-500 p-2 rounded-full"><IoLogoYoutube /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-slate-600 py-2 px-16 text-base-content">
                <div className="flex flex-col lg:flex-row justify-between items-center">
                    <p className="text-white text-center lg:text-left mb-2 lg:mb-0">Copyright © 2024 - All rights reserved by <span className="text-lg text-pink-500 font-semibold">@ICCL BD LTD.</span></p>
                    <p className="text-white text-center lg:text-right">Developed by <span className="text-lg text-pink-500 font-semibold uppercase">ICCL</span></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
