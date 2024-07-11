import { NavLink } from "react-router-dom";
import { FaSquare } from "react-icons/fa";
import iccllogo from '../../../assets/Logo/ICCL2.jpg';
import Iframe from 'react-iframe'
import { FaFacebook } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className="footer bg-neutral pt-16 px-12 text-neutral-content h-96">

                <div className="flex-1">
                    <img className="" src={iccllogo} alt="" />
                    <header className="footer-title mt-4"> Factory Office :</header>
                    <address className="">
                        International Classic Composite Limited. <br />
                        Naojur, Kodda <br />
                        Joydebpur, Gazipur, Bangladesh
                    </address>
                </div>
                <div className="flex-1">
                    <header className="footer-title uppercase">Quick menu</header>


                    <div className="grid text-start grid-flow-col gap-4 flex-1">
                        <ul className="gap-8">
                            <div className="flex gap-2 justify-start items-center">
                                <FaSquare className="text-[8px]"></FaSquare>
                                <li><NavLink to={"#"}>Home</NavLink></li>
                            </div>

                            <div className="flex mt-4 gap-2 justify-start items-center">
                                <FaSquare className="text-[8px]"></FaSquare>
                                <li><NavLink to={"#"}>About</NavLink></li>
                            </div>


                            <div className="flex mt-4 gap-2 justify-start items-center">
                                <FaSquare className="text-[8px]"></FaSquare>
                                <li><NavLink to={"#"}>Certification</NavLink></li>
                            </div>

                            <div className="flex mt-4 gap-2 justify-start items-center">
                                <FaSquare className="text-[8px]"></FaSquare>
                                <li><NavLink to={""}>Contact</NavLink></li>
                            </div>


                        </ul>
                    </div>
                </div>
                <div>
                    <header className="footer-title"> ICCL</header>

                    <div>
                        <Iframe url="https://www.google.com/maps/place/International+Classic+Composite+Ltd.+(ICCL)/@23.9885023,90.3385163,15z/data=!4m6!3m5!1s0x3755dc8d329a92e3:0x7316dd31f887236b!8m2!3d23.9911096!4d90.3561116!16s%2Fg%2F11c44g5r89?hl=en&entry=ttubd"
                            width="250px"
                            height="170"
                            id=""
                            className=""
                            display="block"
                            position="relative" />
                    </div>
                </div>
                <div>
                    <header className="footer-title"> Follow Us</header>
                    <p className=""> Join us on social media</p>
                    <div className="grid text-2xl grid-flow-col gap-4">
                        <a href=""><FaFacebook></FaFacebook></a>
                        <a href=""><FaSquareTwitter></FaSquareTwitter></a>
                        <a href=""><IoLogoYoutube></IoLogoYoutube></a>
                        <a href=""><FaLinkedin></FaLinkedin></a>

                    </div>
                </div>

            </div>
            <div className=" p-4 footer-center bg-slate-600 text-base-content">
                <aside className="flex justify-between">
                    <p className="text-white">Copyright © 2024 - All right reserved by <span className=" text-lg text-pink-500 font-semibold">@ICCL BD LTD.</span></p>
                    <p className="text-white">Developed by <span className="text-lg text-pink-500 font-semibold uppercase">ICCL</span></p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;