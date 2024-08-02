import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaLocationDot, FaFax } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import ContactForm from "./ContactForm";
import { Helmet } from "react-helmet-async";

const Contact = () => {
    return (
        <section className="py-28 mb-12 px-4 bg-slate-100">
            <Helmet>
                <title>ICCL || Contact-Us</title>
            </Helmet>
            <SectionTitle subHeading={"GET IN TOUCH"}
                heading={"Let's Contact Us"}
                Paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}>
            </SectionTitle>
            <div className="grid mt-4 items-center justify-items-center gap-4 md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 pb-8">
                <div className="card w-full max-w-xs bg-white h-52 shadow-2xl p-4">
                    <div className="card-body flex flex-col items-center text-center">
                        <FaLocationDot className="text-4xl text-pink-500" />
                        <address className="pt-4">
                            Kodda, Nowjor, Gazipur, <br />
                            Dhaka, Bangladesh
                        </address>
                    </div>
                </div>
                <div className="card w-full max-w-xs bg-white h-52 shadow-2xl p-4">
                    <div className="card-body flex flex-col items-center text-center">
                        <IoMdMail className="text-4xl text-pink-500" />
                        <p className="pt-4">
                            infoziran@gmail.com <br />
                            helloziran@gmail.com
                        </p>
                    </div>
                </div>
                <div className="card w-full max-w-xs bg-white h-52 shadow-2xl p-4">
                    <div className="card-body flex flex-col items-center text-center">
                        <IoCall className="text-4xl text-pink-500" />
                        <p className="pt-4">
                            (+124) 412-1243465 <br />
                            (+124) 412-2445515
                        </p>
                    </div>
                </div>
                <div className="card w-full max-w-xs bg-white h-52 shadow-2xl p-4">
                    <div className="card-body flex flex-col items-center text-center">
                        <FaFax className="text-4xl text-pink-500" />
                        <p className="pt-4">
                            617-241-60055 <br />
                            817-345-56756
                        </p>
                    </div>
                </div>
            </div>
            <ContactForm />
        </section>
    );
};

export default Contact;
