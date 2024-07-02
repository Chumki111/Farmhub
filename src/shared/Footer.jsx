import logo from '../assets/logo-light.png'
import backgroundImage from '../assets/footer-wheat.png'
import SubscribeSection from '../components/HomeComponents/SubscribeSection'
// image from file
import image1 from '../assets/ln1.png'
import image2 from '../assets/ln2.png'
import image3 from '../assets/ln3.png'
import image4 from '../assets/ln4.png'
import image5 from '../assets/ln5.png'
import image6 from '../assets/ln6.png'
// react-icons
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RxDiscordLogo } from "react-icons/rx";
import { MdMarkEmailRead } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoLocation } from "react-icons/io5";
import { FaRegCopyright } from "react-icons/fa6";
const Footer = () => {
  return (
   <div className="relative">
    <div className="relative top-56"><SubscribeSection/></div>
     <div className="bg-primary bg-cover bg-no-repeat mt-20 pt-44" 
      style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-wrap justify-between items-center text-white p-4">
      <div className="">
        <img src={logo} alt="Logo" className="" />
        <p className='py-7 max-w-sm'>It is a long established fact that a reader will be distracted</p>
        <div className="flex space-x-5">
  <FaFacebookF className='border border-[#EFF3ED] rounded-full text-4xl p-2 hover:bg-third hover:border-none transition duration-300'/>
  <FaLinkedinIn className='border border-[#EFF3ED] rounded-full text-4xl p-2 hover:bg-third hover:border-none transition duration-300'/>
  <RxDiscordLogo className='border border-[#EFF3ED] rounded-full text-4xl p-2 hover:bg-third hover:border-none transition duration-300'/>
</div>
      </div>
      <div className="mt-10 md:mt-0">
        <h2 className='text-[32px] font-semibold pb-5'>Link</h2>
        <div className="text-[#c6cac4] ">
        <span className='block hover:text-third transition duration-300 hover:translate-x-2'>About Us</span>
        <span className='block py-3 hover:text-third transition duration-300 hover:translate-x-2'>Services</span>
        <span className='block hover:text-third transition duration-300 hover:translate-x-2'>FAQ</span>
        <span className='block pt-3 hover:text-third transition duration-300 hover:translate-x-2'>Blogs And News</span>
        </div>
      </div>
      <div className='pt-5 lg:pt-0'>
        <h2 className='text-[32px] font-semibold pb-10'>Contact</h2>
        <div className="">
          <div className='flex gap-2 hover:text-third transition duration-300 hover:translate-x-2'>
          <MdMarkEmailRead className='text-2xl text-secondary'/>
          <span className='text-sm'>chumkikhatun370@gmail.com</span>
          </div>
          <div className='flex gap-2 hover:text-third transition duration-300 hover:translate-x-2 py-2'>
          <BiSolidPhoneCall className='text-2xl text-secondary'/>
          <span className='text-sm'>+880-1777250277</span>
          </div>
          <div className='flex gap-2 hover:text-third transition duration-300 hover:translate-x-2'>
          <IoLocation className='text-2xl text-secondary'/>
          <span className='text-sm'>Sholua,Charghat,Rajshahi,Bangladesh</span>
          </div>
        </div>
      </div>
      <div className='mt-10 lg:mt-0'>
        <h2 className='text-[32px] font-semibold'>Newslatter</h2>
        <div className="grid grid-cols-3 gap-2 pt-3">
        <img src={image1} alt="" className='rounded-2xl transition-transform duration-300 ease-in-out transform hover:scale-105'/>
        <img src={image2} alt="" className='rounded-2xl transition-transform duration-300 ease-in-out transform hover:scale-105'/>
        <img src={image3} alt="" className='rounded-2xl transition-transform duration-300 ease-in-out transform hover:scale-105'/>
        <img src={image4} alt="" className='rounded-2xl transition-transform duration-300 ease-in-out transform hover:scale-105'/>
        <img src={image5} alt="" className='rounded-2xl transition-transform duration-300 ease-in-out transform hover:scale-105'/>
        <img src={image6} alt="" className='rounded-2xl transition-transform duration-300 ease-in-out transform hover:scale-105'/>
        </div>
      </div>
        
      </div>
      <div className="bg-[#EFF3ED] h-[2px] mt-28"></div>
      <div className="flex flex-col md:flex-row justify-between items-center mt-5">
        <div className="text-[#EFF3ED] flex space-x-2 justify-center items-center">
        <FaRegCopyright className='text-sm'/>
        <p>All rights reserved , 2024 FarmHub.</p>
        </div>
        <div className="flex space-x-6 pt-3 md:pt-0 text-[#EFF3ED]">
          <p className='hover:text-third'>Trams & Condition</p>
          <p className='hover:text-third'>Privacy Policy</p>
          <p className='hover:text-third'>Contact Us</p>
        </div>
      </div>
    </div>
  </div>
   </div>
  )
}

export default Footer