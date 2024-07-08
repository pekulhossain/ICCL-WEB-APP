import { NavLink } from 'react-router-dom';
import log from '../../../assets/Logo/ICCL.jpg'
const NavBar = () => {
    const navOptions = <>
        <div className="flex gap-2 justify-center items-center text-center text-xl">
            <li> <NavLink to="/">Home</NavLink></li>
            <li> <NavLink to="/about">About</NavLink></li>
            <li> <NavLink to="/service">Service</NavLink></li>
            <li> <NavLink to="/products">Products</NavLink></li>
            <li> <NavLink to="/testimonials">Testimonial</NavLink></li>
            <li> <NavLink to="/contact">Contact</NavLink></li>
        </div>

    </>
    return (
        <>
            <div className="navbar fixed z-20 bg-opacity-50 max-w-screen-xl bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navOptions
                            }
                        </ul>
                    </div>
                    <a href="/" className="btn btn-ghost text-xl"><div>
                        <img src={log} />
                    </div></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navOptions
                        }
                    </ul>
                </div>
                {/* <div className="navbar-end">
                    <a className="btn">Button</a>
                </div> */}
            </div>
        </>
    );
};

export default NavBar;