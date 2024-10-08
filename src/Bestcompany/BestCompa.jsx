import SectionTitle from '../Components/SectionTitle/SectionTitle';
import './Bestcompa.css';
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../FramerMotion/variants'
import { useNavigate } from 'react-router-dom';

const BestCompa = () => {

    const navigate = useNavigate();
    const handleClick = () => { 
        navigate('/contact');
    };

    return (
        <div className="best-company bg-fixed text-white pt-4">
            <div className='overlay'>
                <div className='overlay-content'>
                    <motion.div className=''
                        variants={fadeIn("up", 0.8)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                    >
                        <SectionTitle subHeading={"WE ARE A BEST COMPANY"}
                            heading={"Ready To Work With Us"}
                            Paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}>
                        </SectionTitle>
                        <button onClick={handleClick} className="btn mt-6 text-white btn-lg relative h-[50px] w-40 transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 hover:text-white hover:before:w-2/4 hover:before:bg-black hover:after:w-2/4 hover:after:bg-black bg-pink-500"><span className="relative z-10">Contact Us</span></button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default BestCompa;