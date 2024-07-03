import PrimaryHero from "../components/Banner/PrimaryHero"
import image from '../assets/talking-contact.png'
import { FaLocationDot } from "react-icons/fa6";
const Contact = () => {
  return (
    <>
    <PrimaryHero text="Contact"/>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-4 my-10">
        {/* image section */}
        <div className="w-full md:w-[75%] lg:w-[50%] flex-1">
          <img src={image} alt="" className="w-full"/>
        </div>
        {/* from section */}
        <div className="flex-1 order-first lg:order-none">
  <form action="" className="bg-white px-12 py-12 decoration-primary rounded-md border-none drop-shadow-xl">
    <span className="text-secondary pb-8 text-lg font-medium">Contact</span>
    <h2 className="text-4xl md:text-6xl text-primary pb-8 pt-5 font-medium">Get Touch Here</h2>
    <div className="flex flex-col md:flex-row gap-6 ">
      <input
        type="text"
        name="name"
        id="name"
        className="w-full pl-4 py-4 outline-none text-primary border border-primary rounded-3xl mb-3 placeholder:text-primary"
        placeholder="Your Name"
      />
      <input
        type="email"
        name="email"
        id="email"
        className="w-full pl-4 py-3 outline-none text-primary border border-primary rounded-3xl placeholder:text-primary mb-4"
        placeholder="Your Email"
      />
    </div>
    <input
        type="text"
        name="area"
        id="area"
        className="w-full pl-4 py-5 outline-none text-primary border border-primary rounded-3xl placeholder:text-primary mb-4"
        placeholder="Your Area"
      />
    <textarea
      name="message"
      id="message"
      className="w-full pl-4 py-3 outline-none text-primary border border-primary rounded-3xl placeholder:text-primary mb-4"
      placeholder="Your Message"
      rows="5"
    ></textarea>
    <div className="w-[40%] md:w-[30%]">
      <button
        type="submit"
        className="relative bg-secondary text-white py-4 text-base rounded-2xl overflow-hidden group hover:text-primary w-full"
      >
        <span className="relative z-10 items-center">
          <span>Submit Now</span>
        </span>
        <div className="absolute inset-0 bg-third transition-all duration-300 ease-in-out transform scale-x-0 scale-y-0 group-hover:scale-x-100 group-hover:scale-y-100 origin-center"></div>
      </button>
    </div>
  </form>
</div>
      </div>
    </div>
    <div>
               
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3635.222625936205!2d88.7679444708422!3d24.338736517941896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbf72bef5c6d6f%3A0xe052da14b6ad2a82!2sSholua%20degree%20College!5e0!3m2!1sen!2sbd!4v1707330817070!5m2!1sen!2sbd" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full"></iframe>
               </div>
                  
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
          <div className="flex items-center flex-wrap  justify-center gap-7 mt-16">
  <div className="flex space-x-4">
    <FaLocationDot className="bg-secondary text-white text-6xl p-4 rounded-full flex items-center justify-center"/>
    <div className=" text-primary">  
      <h2 className="text-3xl pb-2">Address</h2>
      <span className="block ">Dhaka 102, 8000 sent behaibior utl</span>
      <span className="">1216, road 45 house of street</span>
    </div>
  </div>
  <div className="flex space-x-4">
    <FaLocationDot className="bg-secondary text-white text-6xl p-4 rounded-full flex items-center justify-center"/>
    <div className=" text-primary">  
      <h2 className="text-3xl pb-2">Lets Talk us</h2>
      <span className="block">Phone number: +32566 - 800 - 890</span>
      <span className="">1216, road 45 house of street</span>
    </div>
  </div>
  <div className="flex space-x-4">
    <FaLocationDot className="bg-secondary text-white text-6xl p-4 rounded-full flex items-center justify-center"/>
    <div className=" text-primary">  
      <h2 className="text-3xl pb-2">Send us email</h2>
      <span className="block ">demo0023yourmailhotmail.com</span>
      <span className="">demo23yourmail.com</span>
    </div>
  </div>
</div>
            </div>    
               
    </>
  )
}

export default Contact