import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";


export const Routes = createBrowserRouter([
    {
        path:'/',
        element:<Main/>
    }
])

