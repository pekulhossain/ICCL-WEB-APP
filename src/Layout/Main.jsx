import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";

import ScrollToTop from "../Components/ScrollToTop";

import ScrollToTopButton from "../Components/ScrollToTopButton";


import TopBar from "../Menu/TopBar";

const Main = () => {
    return (
        <div>
            <ScrollToTop></ScrollToTop>
            <ScrollToTopButton></ScrollToTopButton>
          <TopBar></TopBar>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Main;