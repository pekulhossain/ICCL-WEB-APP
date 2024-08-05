import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Mensitems from "./Mensitems";
import Womensitems from "./Womensitems";

import {motion} from 'framer-motion';
//variants
import {fadeIn} from '../../../FramerMotion/variants'
import { Helmet } from "react-helmet-async";

const Products = () => {
    return (

        <section className="py-28 bg-slate-100">
            <Helmet>
                <title>ICCL || Products</title>
            </Helmet>
            <motion.div
            variants={fadeIn("up", 0.8)}
            initial ="hidden"
            whileInView={"show"}
            viewport={{once:false, amount: 0.7}}
            >
                <SectionTitle subHeading={"Our Products"}
                    heading={"List of our products"}>
                </SectionTitle>
                <div>
                    <p className="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, ipsum!</p>
                </div>
            </motion.div>

            <Mensitems></Mensitems>
            <Womensitems></Womensitems>
        </section>

    );
};

export default Products;