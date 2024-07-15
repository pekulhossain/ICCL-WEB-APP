import { TbSquareRotatedFilled } from "react-icons/tb";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import awardImg from "../../../assets/About/award.JPG";
import { Helmet } from "react-helmet-async";
import ComGrouth from "./ComGrouth";
import Certification from "./Certification";

const About2 = () => {
    return (
        <section className="py-28">
            <Helmet>
                <title>ICCL || About-Us</title>
            </Helmet>
            <SectionTitle
                subHeading={"About"}
            >
            </SectionTitle>
            <div className="flex gap-4">
                <div className="h-auto">
                    <h1 className=" mb-2 text-2xl text-pink-500">Our Company</h1>
                    <p className="mb-4 text-justify">We are ICCL group and we love what we do. We are located in Bangladesh .</p>
                    <p className="mb-2 text-justify">ICCL Group of Industries, one of the promising RMG manufacturing business organizations, emerged in 1984 from the sole initiative of  Engr. Mr. , the former and founder Chairman and Managing Director of the Group.</p>

                </div>
                <div className="h-auto">
                    <h1 className=" mb-2 text-2xl text-pink-500">Mission</h1>
                    <p className="mb-4 text-justify">Our mission is very clear - provide best effort and services for our customers.</p>
                    <p className="mb-2 text-justify">To satisfy and retain customers through employee involvement, teamwork, personal excellence, and integrating scientific approaches in our quest to become the leading manufacturer of apparel products.</p>
                    <ul className="ml-8">
                        <li className="flex items-center pb-2 gap-2">
                            <div className="text-pink-500"><TbSquareRotatedFilled></TbSquareRotatedFilled></div>
                            <div>Be a market leader in the field of value global supplier of RMG.</div>
                        </li>
                        <li className="flex items-center pb-2 gap-2">
                            <div className="text-pink-500"><TbSquareRotatedFilled></TbSquareRotatedFilled></div>
                            <div>Deliver quality fashionable products at affordable prices.</div>
                        </li>
                        <li className="flex items-center pb-2 gap-2">
                            <div className="text-pink-500"><TbSquareRotatedFilled></TbSquareRotatedFilled></div>
                            <div>Be innovative, cost effective and globally competitive.</div>
                        </li>
                        <li className="flex items-center pb-2 gap-2">
                            <div className="text-pink-500"><TbSquareRotatedFilled></TbSquareRotatedFilled></div>
                            <div>Outstrip our customer’s expectations.
                            </div>
                        </li>
                        <li className="flex items-center pb-2 gap-2">
                            <div className="text-pink-500"><TbSquareRotatedFilled></TbSquareRotatedFilled></div>
                            <div>Provide opportunities for growth for our employees.
                            </div>
                        </li>

                    </ul>
                </div>
                <div>
                    <h1 className=" mb-2 text-2xl text-pink-500">Our Vision</h1>
                    <p className="mb-4 text-justify">From International Classic Composite Ltd.</p>
                    <p className="mb-2 text-justify">Our Vision To become the leading supplier to our customers by delivering socially, ethically and sustainable manufactured quality products with on time delivery using a highly efficient, Eco-friendly and vertically integrated manufacturing process.</p>
                </div>


            </div>
            <section className="flex justify-evenly mt-24">
                <div className=" flex-1 text-center content-center bg-slate-100">
                    <h1 className="text-3xl text-pink-500 mb-6">ICCL Premium awards</h1>
                    <p className="mb-4"> We have been awarded by national & international reputed organizations.</p>
                    <button className="btn text-white btn-lg relative h-[50px] w-52 transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 hover:text-white hover:before:w-2/4 hover:before:bg-black hover:after:w-2/4 hover:after:bg-black bg-pink-500"><span className="relative z-10">See Certificate</span></button>
                </div>
                <div className="flex-1">
                    <img className="" src={awardImg} alt="" />
                </div>
            </section>
            <ComGrouth></ComGrouth>
            <Certification></Certification>
        </section>
    );
};

export default About2;