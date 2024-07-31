import { NavLink } from "react-router-dom";

const Dropdownmenu = () => {
    return (
        <div className="m-1">
            <div tabIndex={0} role="button" className="btn ">Home</div>
            <div className="dropdown dropdown-hover text-black">
                <div tabIndex={0} role="button" className="btn m-1">About</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-4 shadow">
                    <li><NavLink to="/about2">About Us</NavLink></li>
                    <li><a>Certification</a></li>
                    <li><a>Sister Concern</a></li>
                </ul>
            </div>
            <div tabIndex={0} role="button" className="btn m-1">Services</div>
            <div tabIndex={0} role="button" className="btn m-1">Products</div>
            <div tabIndex={0} role="button" className="btn m-1">Testimonials</div>
            <div tabIndex={0} role="button" className="btn m-1">Contact</div>

        </div>
    );
};

export default Dropdownmenu;