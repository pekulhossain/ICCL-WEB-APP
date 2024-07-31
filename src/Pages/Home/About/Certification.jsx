import { TbSquareRotatedFilled } from "react-icons/tb";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import CertificationSlider from "./CertificationSlider";

const Certification = () => {
    return (
        <section className="py-28">
            <SectionTitle
                subHeading="Certification"
            ></SectionTitle>
            <h1 className="text-3xl mb-6 text-pink-500">Certification</h1>
            <p className="text-justify">Certification refers to the confirmation of certain characteristics of an object, person, or organization. This confirmation is often, but not always, provided by some form of external review, education, assessment, or audit. Accreditation is a specific organization's process of certification. According to the National Council on Measurement in Education, a certification test is a credentialing test used to determine whether individuals are knowledgeable enough in a given occupational area to be labeled "competent to practice" in that area.</p>
            <p className="mt-6">The ICCL Group has achieved the following certificates:</p>
            <ul className="mt-4 pl-24">
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
            <section className="mt-8">
                <SectionTitle
                    subHeading="Achieved certificates:"
                ></SectionTitle>
                <CertificationSlider></CertificationSlider>
            </section>
        </section>
    );
};

export default Certification;