import image from '../../assets/count1.svg'
import image1 from '../../assets/wheat-sesh.svg'
const MessageSection = () => {
  return (
    <div className="flex flex-col relative overflow-hidden mt-8">
    <div className="bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 flex flex-col md:flex-row justify-between items-start">
          <div className="flex-1 pr-8 text-white">
            <span className='text-secondary text-lg font-medium block'>Who we are</span>
            <h2 className='text-3xl md:text-4xl lg:text-5xl  font-medium tracking-wide py-3'>Nourishing world <br /> from seed to table</h2>
            <p className="py-3 max-w-md">Agriculture and farming are essential industries that involve the cultivation of crops,raising of livestock, and production of food.</p>
            <div className="flex flex-col md:flex-row gap-4">
            <div className="bg-primary flex flex-col justify-center items-center rounded-md shadow-xl px-5 py-7">
              <img src={image} alt="" className='bg-third p-2 rounded-2xl mb-4'/>
              <h1 className='text-center text-white text-4xl text-wrap hover:text-secondary'>Growing stron
              a feeding</h1>
            </div>
            <div className="bg-primary flex flex-col justify-center items-center rounded-md shadow-xl px-5 py-7">
              <img src={image1} alt="" className='bg-third p-2 rounded-2xl mb-4 w-14 h-14'/>
              <h1 className='text-center text-white text-4xl text-wrap hover:text-secondary'>Taking care of
              the Earth</h1>
            </div>
            </div>
          </div>
          <div className="flex-1">
            <form action="" className="bg-white p-6 rounded-md shadow-md">
              <h2 className="text-4xl mb-4">Leave a message</h2>
              <input type="text" name="name" id="name" className="w-full p-2 border border-gray-300 rounded-md mb-4" placeholder="Your Name"/>
              <input type="email" name="email" id="email" className="w-full p-2 border border-gray-300 rounded-md mb-4" placeholder="Your Email"/>
              <textarea name="message" id="message" className="w-full p-2 border border-gray-300 rounded-md mb-4" placeholder="Your Message"></textarea>
              <button type="submit" className="w-full bg-primary text-white py-2 rounded-md">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default MessageSection