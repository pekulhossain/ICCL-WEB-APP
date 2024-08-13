import { TbSquareRotatedFilled } from "react-icons/tb";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import awardImg from "../../../assets/About/award.JPG";
import { Helmet } from "react-helmet-async";
import ComGrouth from "./ComGrouth";
import Message from "./Message";
import { useNavigate } from 'react-router-dom';



const About2 = () => {
    const navigate = useNavigate();
    const handleClick = () => { // newWindow used for new tab open
        navigate('/certification');
        // const newWindow = window.open(`${window.location.origin}/certification`, '_blank', 'noopener,noreferrer');
        // if (newWindow) newWindow.focus();
    };

    return (
        <section className="py-28 bg-white">
            <Helmet>
                <title>ICCL || About-Us</title>
            </Helmet>
            <SectionTitle subHeading={"About"} />

            <div className="flex mx-4 flex-col lg:flex-row gap-4 px-4 lg:px-0">
                <div className="lg:w-1/3 h-auto">
                    <h1 className="mb-2 text-2xl text-pink-500">Our Company</h1>
                    <p className="mb-4 text-justify">We are ICCL group and we love what we do. We are located in Bangladesh.</p>
                    <p className="mb-2 text-justify">ICCL Group of Industries, one of the promising RMG manufacturing business organizations, emerged in 1984 from the sole initiative of Engr. Mr. , the former and founder Chairman and Managing Director of the Group.</p>
                </div>

                <div className="lg:w-1/3 h-auto">
                    <h1 className="mb-2 text-2xl text-pink-500">Mission</h1>
                    <p className="mb-4 text-justify">Our mission is very clear - provide best effort and services for our customers.</p>
                    <p className="mb-2 text-justify">To satisfy and retain customers through employee involvement, teamwork, personal excellence, and integrating scientific approaches in our quest to become the leading manufacturer of apparel products.</p>
                    <ul className="ml-8 items-center">
                        {["Be a market leader in the field of value global supplier of RMG.",
                            "Deliver quality fashionable products at affordable prices.",
                            "Be innovative, cost effective and globally competitive.",
                            "Outstrip our customer’s expectations.",
                            "Provide opportunities for growth for our employees."].map((item, index) => (
                                <li key={index} className="flex items-center pb-2 gap-2">
                                    <div className="text-pink-500"><TbSquareRotatedFilled /></div>
                                    <div>{item}</div>
                                </li>
                            ))}
                    </ul>
                </div>

                <div className="lg:w-1/3 h-auto">
                    <h1 className="mb-2 text-2xl text-pink-500">Our Vision</h1>
                    <p className="mb-4 text-justify">From International Classic Composite Ltd.</p>
                    <p className="mb-2 text-justify">Our Vision To become the leading supplier to our customers by delivering socially, ethically and sustainable manufactured quality products with on time delivery using a highly efficient, Eco-friendly and vertically integrated manufacturing process.</p>
                </div>
            </div>
            <Message></Message>

            <section className="flex flex-col lg:flex-row justify-evenly mt-24 px-4 lg:px-0">
                <div className="flex-1 text-center bg-slate-100 p-6 rounded-lg shadow-lg">
                    <h1 className="text-3xl text-pink-500 mb-6">ICCL Premium awards</h1>
                    <p className="mb-4">We have been awarded by national & international reputed organizations.</p>
                    <button onClick={handleClick} className="btn text-white btn-lg relative h-[50px] w-46 transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 hover:text-white hover:before:w-2/4 hover:before:bg-black hover:after:w-2/4 hover:after:bg-black bg-pink-500">
                        See Certification
                    </button>
                </div>
                <div className="flex-1">
                    <img className="rounded-lg shadow-lg" src={awardImg} alt="Award" />
                </div>
            </section>

            <ComGrouth />
        </section>
    );
};

export default About2;
