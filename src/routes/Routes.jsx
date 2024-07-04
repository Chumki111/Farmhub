import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import Gallery from "../pages/Gallery";
import Services from "../pages/Services";
import ServiceDetails from "../pages/ServiceDetails";
import { getSingleService } from "../api/service";


export const Routes = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/services',
                element:<Services/>
            },
            {
           path:'/service/:id',
           element:<ServiceDetails/>,
           loader:({params}) => getSingleService(params.id)
            },
            {
                path:'gallery',
                element:<Gallery/>
            },
            {
                path:'/blogs',
                element:<Blog/>
            },
            {
                path:'/contact',
                element:<Contact/>
            }
        ]
    }
])

