import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/Home/About/About";
import Service from "../Pages/Home/Servicess/Service";
import Testimonial from "../Pages/Home/Home/Testimonial/Testimonial";



 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element: <Home></Home>
        },
        {
            path:"about",
            element:<About></About>
        },
        {
            path:"service",
            element:<Service></Service>
        
        },
        {
            path:"testimonial",
            element:<Testimonial></Testimonial>
        }
      ]
    },
  ]);