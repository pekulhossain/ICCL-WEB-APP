import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import Customerslide from "./Customerslide";

const Clients = () => {
    return (
        <section className="py-8 my-16 bg-white">

            <SectionTitle subHeading={"TRUSTED CLIENT"}
                heading={"Our Happy Partners"}>
            </SectionTitle>
            <div>
                <p className="text-center mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, hic!</p>
            </div>
            <Customerslide></Customerslide>

        </section>
    );
};

export default Clients;