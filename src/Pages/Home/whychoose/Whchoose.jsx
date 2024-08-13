import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { TbSquareRotatedFilled } from "react-icons/tb";
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../../../FramerMotion/variants'

import { useNavigate } from 'react-router-dom';

const Whchoose = () => {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/Products');
    };
    return (
        <div className="flex flex-col px-4 md:flex-row py-8 mt-12 bg-slate-100 my-14 h-auto md:h-[400px]">
            <div className="flex-1 md:mr-4 mb-8 md:mb-0 flex flex-col items-center">
                <motion.div
                    variants={fadeIn("up", 0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                >
                    <SectionTitle
                        subHeading={"Why Choose Us"}
                        heading={"Lowest Price Guaranteed, Quality Never Compromised"}
                        Paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                    />
                </motion.div>

                <motion.button onClick={handleClick} className="btn mt-4 text-white btn-lg relative h-[50px] w-46 transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 hover:text-white hover:before:w-2/4 hover:before:bg-black hover:after:w-2/4 hover:after:bg-black bg-pink-500"
                variants={fadeIn("up", 0.8)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                >
                    Our Products
                </motion.button>
            </div>
            <motion.div
                variants={fadeIn("up", 0.8)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex-1"
            >
                <SectionTitle
                    subHeading={"Our Core Values"}
                    heading={"We are committed to our customers, employees, and our society."}
                />
                <ul className="ml-4 md:ml-8">
                    <li className="flex items-center pb-2 gap-2">
                        <div className="text-pink-500"><TbSquareRotatedFilled /></div>
                        <div>Accountability to our work.</div>
                    </li>
                    <li className="flex items-center pb-2 gap-2">
                        <div className="text-pink-500"><TbSquareRotatedFilled /></div>
                        <div>Commitment to our stakeholder.</div>
                    </li>
                    <li className="flex items-center pb-2 gap-2">
                        <div className="text-pink-500"><TbSquareRotatedFilled /></div>
                        <div>Collaborate to deliver the best results.</div>
                    </li>
                    <li className="flex items-center pb-2 gap-2">
                        <div className="text-pink-500"><TbSquareRotatedFilled /></div>
                        <div>Sustainable approach to our environment, society, and business.</div>
                    </li>
                </ul>
            </motion.div>
        </div>
    );
};

export default Whchoose;
