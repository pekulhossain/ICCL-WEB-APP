
import './ContactMsg.css';
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../../../FramerMotion/variants';
import { IoMdMail } from 'react-icons/io';

const ContactMsg = () => {
    return (
        <div className="Contact-Img bg-fixed text-white m-0 p-0">
            <div className=''>
                <div className='overlay-content flex items-center justify-center h-screen'>

                    <motion.div className=''
                        variants={fadeIn("up", 0.8)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                    >
                        <IoMdMail className='text-center mx-auto text-4xl text-pink-500' />
                        <h1 className='text-4xl mt-6 text-center'> " We would love to hear from you. <br />
                            Please fill out the form below "</h1>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default ContactMsg;