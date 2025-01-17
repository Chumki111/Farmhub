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
import Product from "../pages/Product";
import ProductDetails from "../pages/ProductDetails";
import { getSingleProduct } from "../api/products";


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
           path:'/product',
           element:<Product/>
            },
            {
           path:'/product/:id',
           element:<ProductDetails/>,
           loader:({params}) => getSingleProduct(params.id)
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

