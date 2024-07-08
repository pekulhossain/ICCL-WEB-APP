import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/Home/About/About";
import Service from "../Pages/Home/Servicess/Service";
import Testimonial from "../Pages/Home/Home/Testimonial/Testimonial";
import Products from "../Pages/Home/Products/Products";
import Contact from "../Pages/Home/Contact/Contact";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "about",
        element: <About></About>
      },
      {
        path: "service",
        element: <Service></Service>

      },

      {
        path: "products",
        element: <Products></Products>
      },
      {
        path: "testimonials",
        element: <Testimonial></Testimonial>
      }
      ,
      {
        path: "contact",
        element:<Contact></Contact>
      }
    ]
  },
]);