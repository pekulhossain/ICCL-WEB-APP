import SectionTitle from "../../../Components/SectionTitle/SectionTitle"
import FAQimg from '../../../assets/FAQ/1.JPG';

const Question = () => {
    return (
        <section className="py-8 my-16 bg-slate-100">

            <SectionTitle subHeading={"FAQ"}
                heading={"Frequently Asked Questions"}
                Paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}>
            </SectionTitle>
            <div className="flex">
                <div className="flex-1 mr-4">
                    <div className="collapse collapse-plus hover:bg-pink-500 hover:text-white bg-base-100 mb-2">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus hover:bg-pink-500 hover:text-white bg-base-100 mb-2">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus hover:bg-pink-500 hover:text-white bg-base-100 mb-2">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus hover:bg-pink-500 hover:text-white bg-base-100 mb-2">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus hover:bg-pink-500 hover:text-white bg-base-100">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>

                </div>

                <div className="flex-1">
                    <img src={FAQimg} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Question;