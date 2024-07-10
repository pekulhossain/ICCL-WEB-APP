import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import aboutimg1 from "../../../assets/About/1.jpg";
import aboutimg2 from "../../../assets/About/2.jpg";
import aboutimg3 from "../../../assets/About/3.jpg";
import aboutimg4 from "../../../assets/About/4.jpg";
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../../../FramerMotion/variants'


const About = () => {
    return (
        <motion.div
        variants={fadeIn("up", 0.8)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
        className="flex mb-12 py-28">
            <div className="grid gap-4 md:grid-cols-2 sm:grid-cols-1 flex-1 mr-4">
                <div className="transform trasition duration-500 hover:scale-95"> <img className=" rounded-tl-xl" src={aboutimg1} alt="" /></div>
                <div className="transform trasition duration-500 hover:scale-95"> <img className="rounded-tr-xl" src={aboutimg2} alt="" /></div>
                <div className="transform trasition duration-500 hover:scale-95"> <img className="rounded-bl-xl" src={aboutimg3} alt="" /></div>
                <div className="transform trasition duration-500 hover:scale-95"> <img className="rounded-br-xl" src={aboutimg4} alt="" /></div>
            </div>
            
            <div
            className="flex-1">

                <SectionTitle subHeading={""}
                    heading={"A brief history of ICCL"}
                    Paragraph={"Founded in 2007, International Classic Composite Limited.(ICCL) has quickly risen the ranks and established itself as one of the industry leaders in the composite knitwear manufacturing sector in Bangladesh. We believe that as a company we must consistently evolve with the market in order to best serve our clients. Therefore, we have equipped our plants with the state-of-the-art machineries and highly experienced employees, to match the quality & shipment standards set by our clients. Further, we believe that our employees are the heartbeat of our organization and therefore, we continuously put our best efforts into maintaining their welfare and adhere to their development."}>
                </SectionTitle>
                <SectionTitle subHeading={"Our Mission"}
                    heading={"We are committed to our customers, employees, and our society."}
                >
                </SectionTitle>
                <ul className="ml-8">
                    <li className=" list-disc">
                        <b>To our Customers :&nbsp; </b>
                        <span>We aim to satisfy our customers by providing on-time delivery of quality products & services.</span>
                    </li>
                    <li className="list-disc">
                        <b>To our Employees :&nbsp; </b>
                        <span>We aspire to create a positive work environment that complies with both national and international policies.</span>
                    </li>
                    <li className="list-disc">
                        <b>To our Society :&nbsp; </b>
                        <span>We aim to create a better tomorrow.</span>
                    </li>
                </ul>


            </div>
        </motion.div >
    );
};

export default About;