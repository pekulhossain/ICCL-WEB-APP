import { FaLayerGroup } from "react-icons/fa";
import { IoDiscSharp } from "react-icons/io5";
const ComGrouth = () => {
    return (
        <section className=" my-16 mx-2 bg-white">
            <div className="flex mb-8 justify-center content-center text-center">
                <FaLayerGroup className="text-5xl text-pink-500"></FaLayerGroup>
            </div>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                <h1 className="text-3xl text-center text-pink-500 mb-12">A short time line of ICCL Group of Industries Ltd.</h1>
                <li>
                    <div className="timeline-middle">
                        <IoDiscSharp className="text-2xl"></IoDiscSharp>
                    </div>
                    <div className="timeline-start mb-10 md:text-end">
                        <time className="font-mono italic">2007</time>
                        <div className="text-lg font-black timeline-start text-pink-500">Company founded by M. A. Muttaleeb Khokan Sir</div>
                        <div className="text-justify timeline-start">
                            ICCL Group of Industries, one of the promising RMG manufacturing business organizations, emerged in 2007 from the sole initiative of M. A. Muttaleeb Khokan Sir the former and founder Chairman and Managing Director of the Group.
                        </div>
                    </div>
                    <hr className="bg-slate-200" />
                </li>
                <li>
                <hr className="bg-slate-200" />
                    <div className="timeline-middle">
                        <IoDiscSharp className="text-2xl"></IoDiscSharp>
                    </div>
                    <div className="timeline-end mb-10">
                        <time className="font-mono italic">2007</time>
                        <div className="text-lg font-black text-pink-500">M. A. Muttaleeb Khokan Sir took responsibility as Managing Director</div>
                        <div className="text-justify">
                        M. A. Muttaleeb Khokan Sir has been holding the post of Managing Director since 2015 and the group runs very smoothly under his dynamic leadership.
                        </div>
                    </div>
                    <hr className="bg-slate-200" />
                </li>
                <li>
                <hr className="bg-slate-200" />
                    <div className="timeline-middle">
                        <IoDiscSharp className="text-2xl"></IoDiscSharp>
                    </div>
                    <div className="timeline-start mb-10 md:text-end">
                        <time className="font-mono italic">2022</time>
                        <div className="text-lg font-black text-pink-500">Remarkable Growth</div>
                        <div className="text-justify">
                            Over a period of last seventeen years, the company’s business growth is very high and significant. Starting with only one Garment Factory, ICCL Group now owns 3 Garments units, 3 Knitting units. Over a period of 17 years, ICCL has managed to create its own identity as one of the country’s leading foreign currency earner in the RMG sector through promoting in RMG sector rapidly.
                        </div>
                    </div>
                    <hr className="bg-slate-200" />
                </li>
                <li>
                    <div className="timeline-middle">
                        <IoDiscSharp className="mt-[-6px]"></IoDiscSharp>
                    </div>

                </li>

            </ul>
            
        </section>
    );
};

export default ComGrouth;