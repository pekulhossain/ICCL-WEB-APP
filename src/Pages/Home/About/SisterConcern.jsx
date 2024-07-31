import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import sisterconcernimg from  "../../../assets/SisterConcern/1.jpg";
const SisterConcern = () => {
    return (
        <section className="py-28 bg-slate-100">

            <div className="mb-12">
            <SectionTitle subHeading={"Sister Concern"}
            npm i react-scroll-to-top
                heading={""}>
            </SectionTitle>
            </div>
            <div className="flex">
                <div className="flex-1 mr-4">
                    <h1 className="text-3xl text-center text-pink-500 mb-12">Our Sister Concern</h1>
                    <p className="text-start mb-4">
                        ICCL Group of Industries, one of the promising RMG manufacturing business organizations in Bangladesh. </p>
                    <p className="text-start">
                        Body Fashion and Body Link is a sister concern of ICCL Group of Industries. Body Fashion and Body Link specializes in importing all kinds of products.
                    </p>
                </div>
                <div className="flex-1">
                    <img src={sisterconcernimg} alt="" />
                </div>
            </div>
        </section>
    );
};

export default SisterConcern;