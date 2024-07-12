import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Service from "../Pages/Home/Servicess/Service";
import Testimonial from "../Pages/Home/Home/Testimonial/Testimonial";
import Products from "../Pages/Home/Products/Products";
import Contact from "../Pages/Home/Contact/Contact";
import About2 from "../Pages/Home/About/About2";



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
        path: "about2",
        element: <About2></About2>
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
        path: "testimonial",
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
