
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import knittingimg from '../../../assets/Services/knitting.JPG';
import dyeingimg from '../../../assets/Services/dyeing.JPG';
import printing from '../../../assets/Services/printing.JPG';
import Counter from '../../../Counteranimation/Counter';
import { Helmet } from "react-helmet-async";

const Service = () => {
    return (
        <section className="py-28 bg-white">
            <Helmet>
                <title>ICCL || Services</title>
            </Helmet>
            <SectionTitle subHeading={'WHAT WE DO'} heading={'Our Services'} />

            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-items-center">
                <div className="card transform hover:bg-pink-500 hover:text-white transition duration-500 hover:scale-105 w-full sm:w-80 md:w-96 bg-base-100 shadow-xl">
                    <figure><img src={knittingimg} alt="Knitting" className="w-full h-48 object-cover" /></figure>
                    <div className="card-body p-4 md:p-6 lg:p-8">
                        <p className="card-title text-xl md:text-2xl lg:text-3xl"><Counter number={1523} title=" Ton/Month" /></p>
                        <p className="font-semibold text-sm md:text-base lg:text-lg">Knitting</p>
                    </div>
                </div>
                <div className="card transform hover:bg-pink-500 hover:text-white transition duration-500 hover:scale-105 w-full sm:w-80 md:w-96 bg-base-100 shadow-xl">
                    <figure><img src={dyeingimg} alt="Dyeing" className="w-full h-48 object-cover" /></figure>
                    <div className="card-body p-4 md:p-6 lg:p-8">
                        <p className="card-title text-xl md:text-2xl lg:text-3xl"><Counter number={1324} title=" Ton/Month" /></p>
                        <p className="font-semibold text-sm md:text-base lg:text-lg">Dyeing</p>
                    </div>
                </div>
                <div className="card transform hover:bg-pink-500 hover:text-white transition duration-500 hover:scale-105 w-full sm:w-80 md:w-96 bg-base-100 shadow-xl">
                    <figure><img src={printing} alt="Screen Printing" className="w-full h-48 object-cover" /></figure>
                    <div className="card-body p-4 md:p-6 lg:p-8">
                        <p className="card-title text-xl md:text-2xl lg:text-3xl"><Counter number={100000} title=" Pcs/Month" /></p>
                        <p className="font-semibold text-sm md:text-base lg:text-lg">Screen Printing</p>
                    </div>
                </div>
                <div className="card transform hover:bg-pink-500 hover:text-white transition duration-500 hover:scale-105 w-full sm:w-80 md:w-96 bg-base-100 shadow-xl">
                    <figure><img src={knittingimg} alt="Knitting" className="w-full h-48 object-cover" /></figure>
                    <div className="card-body p-4 md:p-6 lg:p-8">
                        <p className="card-title text-xl md:text-2xl lg:text-3xl"><Counter number={1523} title=" Ton/Month" /></p>
                        <p className="font-semibold text-sm md:text-base lg:text-lg">Knitting</p>
                    </div>
                </div>
                <div className="card transform hover:bg-pink-500 hover:text-white transition duration-500 hover:scale-105 w-full sm:w-80 md:w-96 bg-base-100 shadow-xl">
                    <figure><img src={dyeingimg} alt="Dyeing" className="w-full h-48 object-cover" /></figure>
                    <div className="card-body p-4 md:p-6 lg:p-8">
                        <p className="card-title text-xl md:text-2xl lg:text-3xl"><Counter number={1324} title=" Ton/Month" /></p>
                        <p className="font-semibold text-sm md:text-base lg:text-lg">Dyeing</p>
                    </div>
                </div>
                <div className="card transform hover:bg-pink-500 hover:text-white transition duration-500 hover:scale-105 w-full sm:w-80 md:w-96 bg-base-100 shadow-xl">
                    <figure><img src={printing} alt="Screen Printing" className="w-full h-48 object-cover" /></figure>
                    <div className="card-body p-4 md:p-6 lg:p-8">
                        <p className="card-title text-xl md:text-2xl lg:text-3xl"><Counter number={100000} title=" Pcs/Month" /></p>
                        <p className="font-semibold text-sm md:text-base lg:text-lg">Screen Printing</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;
