import { Helmet } from "react-helmet";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import sisterconcernimg from "../../../assets/SisterConcern/1.jpg";

const SisterConcern = () => {
    return (
        <section className="py-28 px-4 bg-slate-100">
            <div className="mb-12">
                <SectionTitle subHeading={"Sister Concern"} heading={""} />
            </div>
            <Helmet>
                <title>ICCL || SisterConcern</title>
            </Helmet>
            <div className="flex flex-col lg:flex-row gap-4 px-4 lg:px-0">
                <div className="flex-1 lg:mr-4 mb-8 lg:mb-0">
                    <h1 className="text-3xl text-center text-pink-500 mb-12">Our Sister Concern</h1>
                    <p className="text-start mb-4">
                        ICCL Group of Industries, one of the promising RMG manufacturing business organizations in Bangladesh.
                    </p>
                    <p className="text-start">
                        Body Fashion and Body Link is a sister concern of ICCL Group of Industries. Body Fashion and Body Link specializes in importing all kinds of products.
                    </p>
                </div>
                <div className="flex-1">
                    <img className="rounded-lg shadow-lg" src={sisterconcernimg} alt="Sister Concern" />
                </div>
            </div>
        </section>
    );
};

export default SisterConcern;
