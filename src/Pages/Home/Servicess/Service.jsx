import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import knittingimg from '../../../assets/Services/knitting.JPG';
import dyeingimg from '../../../assets/Services/dyeing.JPG';
import printing from '../../../assets/Services/printing.JPG';
import Counter from '../../../Counteranimation/Counter';
// import embroidaryimg from '../../../assets/Services/emborydary.JPG';
// import garmentimg from '../../../assets/Services/garment.JPG';
// import aopimg from '../../../assets/Services/aop.JPG';
const Service = () => {
    return (
        <section className="py-28">
            <SectionTitle subHeading={'WHAT WE DO'}
                heading={'Our Services'}>

            </SectionTitle>

            <div className="items-center justify-items-center grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                <div className="card transform hover:bg-pink-500 hover:text-white trasition duration-500 hover:scale-105 w-96 bg-base-100 shadow-xl">
                    <figure><img src={knittingimg} alt="" /></figure>
                    <div className="card-body">
                        {/* <h2 className="card-title">2,125Ton/Month</h2> */}
                        <p className="card-title text-2xl"><Counter number={1523} title=" Ton/Month" /></p>
                        <p className=" font-semibold">Knitting</p>
                        
                    </div>
                </div>
                <div className="card transform hover:bg-pink-500 hover:text-white trasition duration-500 hover:scale-105 w-96 bg-base-100 shadow-xl">
                    <figure><img src={dyeingimg} alt="" /></figure>
                    <div className="card-body">
                        {/* <h2 className="card-title">2,400Ton/Month</h2> */}
                        <p className="card-title text-2xl"><Counter number={1324} title=" Ton/Month" /></p>
                        <p className=" font-semibold">Dyeing</p>
                    </div>
                </div>
                <div className="card transform hover:bg-pink-500 hover:text-white trasition duration-500 hover:scale-105 w-96 bg-base-100 shadow-xl">
                    <figure><img src={printing} alt="" /></figure>
                    <div className="card-body">
                        {/* <h2 className="card-title">3.5Million Pcs/Month</h2>
                        <p>Screen Printing</p> */}
                        <p className="card-title text-2xl"><Counter number={100000} title=" Pcs/Month" /></p>
                        <p className=" font-semibold">Screen Printing</p>
                    </div>
                </div>
                <div className="card transform hover:bg-pink-500 hover:text-white trasition duration-500 hover:scale-105 w-96 bg-base-100 shadow-xl">
                    <figure><img src={knittingimg} alt="" /></figure>
                    <div className="card-body">
                        {/* <h2 className="card-title">2,125Ton/Month</h2> */}
                        <p className="card-title text-2xl"><Counter number={1523} title=" Ton/Month" /></p>
                        <p className=" font-semibold">Knitting</p>
                        
                    </div>
                </div>
                <div className="card transform hover:bg-pink-500 hover:text-white trasition duration-500 hover:scale-105 w-96 bg-base-100 shadow-xl">
                    <figure><img src={dyeingimg} alt="" /></figure>
                    <div className="card-body">
                        {/* <h2 className="card-title">2,400Ton/Month</h2> */}
                        <p className="card-title text-2xl"><Counter number={1324} title=" Ton/Month" /></p>
                        <p className=" font-semibold">Dyeing</p>
                    </div>
                </div>
                <div className="card transform hover:bg-pink-500 hover:text-white trasition duration-500 hover:scale-105 w-96 bg-base-100 shadow-xl">
                    <figure><img src={printing} alt="" /></figure>
                    <div className="card-body">
                        {/* <h2 className="card-title">3.5Million Pcs/Month</h2>
                        <p>Screen Printing</p> */}
                        <p className="card-title text-2xl"><Counter number={100000} title=" Pcs/Month" /></p>
                        <p className=" font-semibold">Screen Printing</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;