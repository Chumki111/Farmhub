import Accordion from "../Accordion/Accordion"
import image from '../../assets/service-bambo.jpg'
import { FaPhoneAlt } from "react-icons/fa";
const RightSide = () => {
  return (
    <>
      <Accordion />
      <div className="my-7 relative">
    <div className="relative">
        <img src={image} alt="Descriptive Alt Text" className="blur-[2px]"/>
    </div>
    <div className="absolute top-0 left-0 w-full text-center text-white  mt-7">
    <h2 className="text-3xl font-bold">GET TOUCH</h2>
    <small className="mt-12">For fast service</small>
    <div className="flex justify-center items-center mt-16">
   <a href="#">
   <FaPhoneAlt className="bg-secondary text-white text-7xl p-4 rounded-full flex items-center justify-center cursor-pointer"/>
   </a>
    </div>
    <h2 className="mt-16 text-3xl font-bold">(+888) 123 456 765
    </h2>
    </div>
</div>
    </>
  )
}

export default RightSide