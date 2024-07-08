import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaFax } from "react-icons/fa";
import ContactForm from "./ContactForm";


const Contact = () => {
    return (
        <section className="py-28 mb-12 px-2 bg-slate-100">
            <SectionTitle subHeading={"GET IN TOUCH"}
                heading={"Let's Contact Us"}
                Paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}>
            </SectionTitle>
            <div className="grid items-center justify-items-center gap-2 md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 pb-4">

                <div className="card w-72 bg-white h-52 shadow-2xl">
                    <div className="card-body justify-center place-items-center">
                        <FaLocationDot className="text-4xl text-pink-500"></FaLocationDot>
                        <address className="pt-4">
                            Kodda, Nowjor,Gazipur, <br />
                            Dhaka, Bangladesh
                        </address>
                    </div>
                </div>
                <div className="card w-72 bg-white h-52 shadow-2xl">
                    <div className="card-body justify-center place-items-center">
                        <IoMdMail className="text-4xl text-pink-500"></IoMdMail>
                        <p className="pt-4">
                            infoziran@gmail.com <br />
                            helloziran@gmail.com
                        </p>
                    </div>
                </div>
                <div className="card w-72 bg-white h-52 shadow-2xl">
                    <div className="card-body justify-center place-items-center">
                        <IoCall className="text-4xl text-pink-500"></IoCall>
                        <p className="pt-4">
                            (+124) 412-1243465 <br />
                            (+124) 412-2445515
                        </p>
                    </div>
                </div>
                <div className="card w-72 bg-white h-52 shadow-2xl">
                    <div className="card-body justify-center place-items-center">
                        <FaFax className="text-4xl text-pink-500"></FaFax>
                        <p className="pt-4">
                            617-241-60055 <br />
                            817-345-56756
                        </p>
                    </div>
                </div>

            </div>
            <ContactForm></ContactForm>
        </section>
    );
};

export default Contact;