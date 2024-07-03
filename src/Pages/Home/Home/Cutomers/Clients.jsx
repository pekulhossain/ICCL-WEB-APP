import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import Customerslide from "./Customerslide";

const Clients = () => {
    return (
        <section className="py-8 my-16 bg-slate-100">

            <SectionTitle subHeading={"TRUSTED CLIENT"}
                heading={"Our Happy Partners"}
                Paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}>
            </SectionTitle>

            <Customerslide></Customerslide>
            
        </section>
    );
};

export default Clients;