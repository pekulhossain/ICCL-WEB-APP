import { IoIosSend } from "react-icons/io";

const ContactForm = () => {
    return (
        <section className="px-4">
            <div className=" flex justify-items-center text-center  items-center justify-center mt-8 pt-8 bg-white border-t-2 border-pink-500 border-b-2">
                <form className="md:w-full justify-items-center text-center items-center">
                    <div className="flex justify-center items-center gap-4">

                        <div className="form-control w-full my-2">
                            {/* <div className="label">
                                <span className="label-text">Name*</span>
                            </div> */}
                            <input type="email" placeholder="Name"
                                className="input input-bordered w-full  hover:border-pink-500" />
                        </div>
                        <div className="form-control w-full my-2">
                            {/* <div className="label">
                                <span className="label-text">Email*</span>
                            </div> */}
                            <input type="email" placeholder="E-Mail"
                                className="input input-bordered w-full  hover:border-pink-500" />
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-4">

                        <div className="form-control w-full my-2">
                            {/* <div className="label">
                                <span className="label-text">Name*</span>
                            </div> */}
                            <input type="email" placeholder="Phone Number"
                                className="input input-bordered w-full  hover:border-pink-500" />
                        </div>
                        <div className="form-control w-full my-2 ">
                            {/* <div className="label">
                                <span className="label-text">Email*</span>
                            </div> */}
                            <input type="email" placeholder="Subject"
                                className="input input-bordered w-full  hover:border-pink-500" />
                        </div>
                    </div>
                    
                    <label className="form-control mt-2">
                        {/* <label className="label">
                            <span className="label-text">Message*</span>
                        </label> */}
                        <textarea className="textarea textarea-bordered h-24  hover:border-pink-500" placeholder="Write your message here"></textarea>
                    </label>

                    <p className="btn bg-pink-500 my-4 justify-items-center items-center text-center text-white"> Send Message <IoIosSend className="text-white text-lg"></IoIosSend></p>
                </form>

            </div>
        </section>
    );
};

export default ContactForm;