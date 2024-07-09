import { Helmet } from "react-helmet-async";
import BestCompa from "../../../Bestcompany/BestCompa";
import About from "../About/About";
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

            <Banner2></Banner2>
            <Feature></Feature>
            <About></About>
            <Service></Service>
            <Whchoose></Whchoose>
            <Progress></Progress>
            <Different></Different>
            <Products></Products>
            <BestCompa></BestCompa>
            <Question></Question>
            <Testimonial></Testimonial>
            <Makeorder></Makeorder>
            <Clients></Clients>
            <Contact></Contact>
           <Helmet>
                <title>ICCL || Home</title>
            </Helmet>
        </div>
    );
};

export default Home;