import { Outlet } from "react-router-dom"

import Footer from "../shared/Footer"
import Nav from "../shared/Nav"


const Main = () => {
  return (
    <div>
        <Nav/>
        <Outlet/>
        <Footer/>
        </div>
  )
}

export default Main