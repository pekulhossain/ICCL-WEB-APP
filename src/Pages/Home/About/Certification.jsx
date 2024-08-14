import { TbSquareRotatedFilled } from "react-icons/tb";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import CertificationSlider from "./CertificationSlider";
import { Helmet } from "react-helmet";

const Certification = () => {
    return (
        <section className="py-28 bg-white px-4 lg:px-0">
            <Helmet>
                <title>ICCL || Certification</title>
            </Helmet>
            <SectionTitle subHeading="Certification" />

            <h1 className="text-3xl mb-6 text-pink-500">Certification</h1>
            <p className="text-justify">Certification refers to the confirmation of certain characteristics of an object, person, or organization. This confirmation is often, but not always, provided by some form of external review, education, assessment, or audit. Accreditation is a specific organization's process of certification. According to the National Council on Measurement in Education, a certification test is a credentialing test used to determine whether individuals are knowledgeable enough in a given occupational area to be labeled "competent to practice" in that area.</p>

            <p className="mt-6">The ICCL Group has achieved the following certificates:</p>
            <ul className="mt-4 pl-6 md:pl-12 lg:pl-24">
                {[
                    "Be a market leader in the field of value global supplier of RMG.",
                    "Deliver quality fashionable products at affordable prices.",
                    "Be innovative, cost effective and globally competitive.",
                    "Outstrip our customer’s expectations.",
                    "Provide opportunities for growth for our employees."
                ].map((item, index) => (
                    <li key={index} className="flex items-center pb-2 gap-2">
                        <div className="text-pink-500"><TbSquareRotatedFilled /></div>
                        <div>{item}</div>
                    </li>
                ))}
            </ul>

            <section className="mt-8">
                <SectionTitle subHeading="Achieved certificates:" />
                <CertificationSlider />
            </section>
        </section>
    );
};

export default Certification;
