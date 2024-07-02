import PrimaryHero from "../components/Banner/PrimaryHero"
import image from '../assets/talking-contact.png'

const Contact = () => {
  return (
    <>
    <PrimaryHero text="Contact"/>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex gap-4 my-10">
        <div className="w-[50%] flex-1">
          <img src={image} alt="" className="w-full"/>
        </div>
        <div className="flex-1">
  <form action="" className="bg-white px-12 py-12 decoration-primary rounded-md border-none drop-shadow-xl">
    <span className="text-secondary pb-8 text-lg font-medium">Contact</span>
    <h2 className="text-6xl text-primary pb-8 pt-5 font-medium">Get Touch Here</h2>
    <div className="flex gap-6">
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
    <div className="w-[30%]">
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
    </>
  )
}

export default Contact