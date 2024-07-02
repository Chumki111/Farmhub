import image from '../../assets/count1.svg'
import image1 from '../../assets/wheat-sesh.svg'
const MessageSection = () => {
  return (
    <div className="flex flex-col relative overflow-hidden mt-8">
    <div className="bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 flex flex-col md:flex-row justify-between items-start">
          {/* 1st section content */}
          <div className="flex-1 pr-8 text-white">
            <span className='text-secondary text-lg font-medium block'>Who we are</span>
            <h2 className='text-3xl md:text-4xl lg:text-5xl  font-medium tracking-wide py-3'>Nourishing world <br /> from seed to table</h2>
            <p className="py-3 max-w-md">Agriculture and farming are essential industries that involve the cultivation of crops,raising of livestock, and production of food.</p>
            {/* card section */}
            <div className="flex flex-col md:flex-row gap-4">
            <div className="bg-[#2A5747] flex flex-col justify-center items-center rounded-xl shadow-xl px-5 py-7">
              <img src={image} alt="" className='bg-third p-2 rounded-2xl mb-4'/>
              <h1 className='text-center text-white text-4xl text-wrap hover:text-secondary'>Growing stron
              a feeding</h1>
            </div>
            <div className="bg-[#2A5747] flex flex-col justify-center items-center rounded-xl shadow-xl px-5 py-7">
              <img src={image1} alt="" className='bg-third p-2 rounded-2xl mb-4 w-14 h-14'/>
              <h1 className='text-center text-white text-4xl text-wrap hover:text-secondary'>Taking care of
              the Earth</h1>
            </div>
            </div>
          </div>
          {/* 2nd section from section */}
          <div className="flex-1">
  <form action="" className="bg-[#2A5747] px-12 py-12 text-white rounded-md shadow-md">
    <h2 className="text-4xl pb-8 font-medium">Leave a message</h2>
    <div className="flex gap-6">
      <input
        type="text"
        name="name"
        id="name"
        className="w-full pl-4 py-4 outline-none text-white bg-primary rounded-3xl mb-3"
        placeholder="Your Name"
      />
      <input
        type="email"
        name="email"
        id="email"
        className="w-full pl-4 py-3 outline-none text-white bg-primary rounded-3xl mb-4"
        placeholder="Your Email"
      />
    </div>
    <div className="flex gap-6 mt-3">
      <input
        type="number"
        name="number"
        id="number"
        className="w-full pl-4 py-3 outline-none text-white bg-primary rounded-3xl mb-4"
        placeholder="Your Number"
      />
      <input
        type="text"
        name="area"
        id="area"
        className="w-full pl-4 py-3 outline-none text-white bg-primary rounded-3xl mb-4"
        placeholder="Your Area"
      />
    </div>
    <textarea
      name="message"
      id="message"
      className="w-full pl-4 py-3 outline-none text-white bg-primary rounded-3xl mb-4"
      placeholder="Your Message"
      rows="5"
    ></textarea>
    <div>
      <button
        type="submit"
        className="relative text-lg bg-third text-primary py-3 px-10 rounded-2xl overflow-hidden group hover:text-white w-full"
      >
        <span className="relative z-10 flex items-center justify-center">
          <span>Submit Now</span>
        </span>
        <div className="absolute inset-0 bg-secondary transition-all duration-300 ease-in-out transform scale-x-0 scale-y-0 group-hover:scale-x-100 group-hover:scale-y-100 origin-center"></div>
      </button>
    </div>
  </form>
</div>

        </div>
      </div>
      
    </div>
  </div>
 

  )
}

export default MessageSection