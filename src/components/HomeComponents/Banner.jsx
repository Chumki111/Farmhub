import image from '../../assets/hero1.png'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoMdArrowRoundForward } from "react-icons/io";
const Banner = () => {
  return (
    <div className='flex flex-col'>
      <div className="bg-gradient-to-r from-primary via-[#285545] to-[#7EA799] text-white">
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col md:flex-row justify-between mt-10 pb-10'>
            <div className='pt-8 md:pt-10'>
              <h1 className='text-4xl md:text-4xl lg:text-6xl font-semibold md:leading-[85px]'>Plowing the earth</h1>
              <h2 className='text-4xl md:text-4xl lg:text-6xl font-[300px] md:leading-[85px]'><span className="hope">harvesting</span> hope</h2>
              <p className='max-w-md pt-7 leading-6'>Education is the key to studeny Unlock your potential through learning. br
                Expand your horizons with the most</p>
              <div className='flex items-center pt-3'>
                <MdKeyboardDoubleArrowRight className='text-4xl' />
                <p className='text-xl'>Where innovation meets cultivation</p>
              </div>
              <div className='flex items-center'>
                <MdKeyboardDoubleArrowRight className='text-4xl' />
                <p className='text-xl'>Crops of opportunity fields of dreams</p>
              </div>
              <div className='pt-7'>
                <button className="relative text-xl bg-secondary text-white py-3 px-10 rounded-full overflow-hidden group">
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>View More</span>
                    <IoMdArrowRoundForward className='animate-bounce text-xl'/>
                  </span>
                  <div className="absolute inset-0 bg-third transition-all duration-300 ease-in-out transform scale-x-0 scale-y-0 group-hover:scale-x-100 group-hover:scale-y-100 origin-center"></div>
                </button>
              </div>
            </div>
            <div className='order-first md:order-last'>
              <img src={image} alt="" className='animate-pulse' />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Banner