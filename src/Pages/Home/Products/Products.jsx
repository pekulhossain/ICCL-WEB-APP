import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Mensitems from "./Mensitems";
import Womensitems from "./Womensitems";

import {motion} from 'framer-motion';
//variants
import {fadeIn} from '../../../FramerMotion/variants'

const Products = () => {
    return (

        <section className="py-28 bg-slate-100">
            <motion.div
            variants={fadeIn("up", 0.8)}
            initial ="hidden"
            whileInView={"show"}
            viewport={{once:false, amount: 0.7}}
            >
                <SectionTitle subHeading={"Our Products"}
                    heading={"List of our products"}
                    Paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}>
                </SectionTitle>
            </motion.div>

            <Mensitems></Mensitems>
            <Womensitems></Womensitems>
        </section>

    );
};

export default Products;