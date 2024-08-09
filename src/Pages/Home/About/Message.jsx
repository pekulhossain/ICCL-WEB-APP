
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MdsirImage from "../../../assets/Testimonial/mdsir.jpg";
const Message = () => {
    return (
        <section className="py-28 px-4 bg-slate-100">
        <div className="mb-12">
            <SectionTitle subHeading={"Message From Our MD SIR"} heading={""} />
        </div>
        <div className="flex flex-col lg:flex-row gap-4 px-4 lg:px-0">
            <div className="flex-1 lg:mr-4 mb-8 lg:mb-0">
                {/* <h1 className="text-3xl text-center text-pink-500 mb-12"></h1> */}
                <p className="text-start mb-4">
                Since our origin our goal has always been to look forward and sustainability grow our business. Over the years, as a group we have faced many challenges and we have always managed to successfully overcome them through strong teamwork, and dedication.
                </p>
                <p className="text-start">
                Today, ICCL group has established itself at the forefront of RMG manufacturing and none of this would have been possible without our amazing team, and strong bonds with our great suppliers and customers. We look forward to further enhance our current relationships and building new ones as we seek to grow together in all our future ventures.
                </p>
                <h3 className="text-end mt-2 font-semibold">Thank you, <br /> Name</h3>
            </div>
            <div className="flex-1">
                <img className="rounded-lg shadow-lg" src={MdsirImage} alt="Message" />
            </div>
        </div>
    </section>
    );
};

export default Message;