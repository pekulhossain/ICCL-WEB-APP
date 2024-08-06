import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { GiSewingMachine } from "react-icons/gi";
import { motion } from "framer-motion";
import { fadeIn } from '../../../FramerMotion/variants';

const Feature = () => {
    return (
        <section className="bg-slate-100 pt-16 mb-12">
            <motion.div
                variants={fadeIn("up", 0.8)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
            >
                <SectionTitle subHeading={"Our Features"} heading={"We Always Try To Understand Users Expectation"} />
                <div>
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, asperiores.</p>
                </div>
            </motion.div>

            <div className="grid items-center justify-items-center gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 pt-12 pb-16">
                <motion.div
                    variants={fadeIn("up")}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.7 }}
                    className="card w-full sm:w-80 md:w-96 h-64 bg-white shadow-xl transform hover:bg-pink-500 hover:text-white transition duration-500 hover:scale-95"
                >
                    <div className="card-body">
                        <div className="w-8 justify-items-center text-center">
                            <GiSewingMachine className="flex justify-items-center items-center text-pink-500 text-7xl align-middle" />
                        </div>
                        <h2 className="card-title">MANUFACTURING PRECISION</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, reiciendis!</p>
                    </div>
                </motion.div>
                <motion.div
                    variants={fadeIn("up", 0.6)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.7 }}
                    className="card w-full sm:w-80 md:w-96 h-64 bg-white shadow-xl transform hover:bg-pink-500 hover:text-white transition duration-500 hover:scale-95"
                >
                    <div className="card-body">
                        <div className="w-8 justify-items-center text-center">
                            <GiSewingMachine className="flex justify-items-center items-center text-pink-500 text-7xl align-middle" />
                        </div>
                        <h2 className="card-title">ACCLAIMED CLIENTS</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, reiciendis!</p>
                    </div>
                </motion.div>
                <motion.div
                    variants={fadeIn("up")}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.7 }}
                    className="card w-full sm:w-80 md:w-96 h-64 bg-white shadow-xl transform hover:bg-pink-500 hover:text-white transition duration-500 hover:scale-95"
                >
                    <div className="card-body">
                        <div className="w-8 justify-items-center text-center">
                            <GiSewingMachine className="flex justify-items-center items-center text-pink-500 text-7xl align-middle" />
                        </div>
                        <h2 className="card-title">QUALITY ENSURED</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, reiciendis!</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Feature;
