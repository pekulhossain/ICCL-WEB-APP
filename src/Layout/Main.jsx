import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import ScrollToTop from "../Components/ScrollToTop";

const Main = () => {
    return (
        <div>
            <ScrollToTop></ScrollToTop>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;