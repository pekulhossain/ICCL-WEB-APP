import './Makeorder.css';
import { useNavigate } from 'react-router-dom';

const Makeorder = () => {

    const navigate = useNavigate();
    const handleClick = () => { 
        navigate('/contact');
    };
    return (
        <div className="make-order relative bg-fixed text-white h-40 mb-8 bg-cover bg-center">
            <div className='overlay-order absolute inset-0 bg-opacity-50 flex justify-center items-center'>
                <div className='overlay-content text-center p-4'>
                    <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold pb-2'>You Can Find All Kinds of Fabric Here</h2>
                    <p className='text-lg md:text-xl pb-4'>To give an order</p>
                    <button onClick={handleClick} className="btn mt-4 text-white btn-lg relative h-[50px] w-46 transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 hover:text-white hover:before:w-2/4 hover:before:bg-black hover:after:w-2/4 hover:after:bg-black bg-pink-500">
                    Order Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Makeorder;
