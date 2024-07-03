
import './Makeorder.css';
const Makeorder = () => {
    return (
        <div className="make-order bg-fixed text-white h-40 mb-8">
            <div className='overlay-order '>
                <div className='overlay-content'>
                    <div className=''>
                        <h2 className='text-3xl text-white pb-2'>You Can Find All Kinds of Fabric Here</h2>
                        <p className='pb-2'>To give a order</p>
                    </div>
                    <div className='flex justify-center items-center justify-items-center'>
                        <button className="btn text-black btn-lg relative h-[50px] w-40 transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 hover:text-white hover:before:w-2/4 hover:before:bg-black hover:after:w-2/4 hover:after:bg-black bg-white flex justify-center items-center place-items-center"><span className="relative z-10">Contact Us</span></button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Makeorder;