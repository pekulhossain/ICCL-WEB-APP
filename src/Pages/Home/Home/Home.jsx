import { NavLink } from "react-router-dom";
import BestCompa from "../../../Bestcompany/BestCompa";
import About from "../About/About";
// import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Different from "../Different/Different";
import Question from "../FAQ/Question";
import Feature from "../Feature/Feature";
import Makeorder from "../Makeorder/Makeorder";
import Products from "../Products/Products";
import Progress from "../Progress/Progress";
import Service from "../Servicess/Service";
import Whchoose from "../whychoose/Whchoose";
import Clients from "./Cutomers/Clients";
import Testimonial from "./Testimonial/Testimonial";
import Banner2 from "../Banner/Banner2";
// import Navbar2 from "../../Shared/NavBar/Navbar2";




const Home = () => {
    return (
        <div>
            {/* <Banner></Banner> */}
            <Banner2></Banner2>
            {/* <Navbar2></Navbar2> */}
            <Feature></Feature>
            <About></About>
            <Service></Service>
            <Whchoose></Whchoose>
            <Progress></Progress>
            <Different></Different>
            <Products></Products>
            <BestCompa></BestCompa>
            <Question></Question>
            <NavLink to="testimonial"><Testimonial></Testimonial></NavLink>
            <Makeorder></Makeorder>
            <Clients></Clients>
            <Contact></Contact>
           
        </div>
    );
};

export default Home;