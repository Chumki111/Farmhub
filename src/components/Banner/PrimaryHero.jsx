import { Link } from 'react-router-dom';
import backgroundImage from '../../assets/bread-bg.png'
import image from '../../assets/tt-slice.png'
import { IoIosArrowForward } from "react-icons/io";
const PrimaryHero = ({text}) => {
  return (
    <div className='flex flex-col'>
      <div 
        className="relative text-white"
        style={{ backgroundImage: `linear-gradient(to right, rgba(31, 78, 61, 0.7), rgba(31, 78, 61, 0.7)), url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col md:flex-row justify-between mt-16 pb-16'>
            {/* content section */}
            <div className='pt-8 md:pt-10'>
              <h1 className='text-4xl md:text-4xl lg:text-7xl font-semibold md:leading-[85px]'>{text}</h1>
              
              
              <div className="flex space-x-3 items-center pt-5">
                <Link to='/'>
                <h2 className='text-xl'>Home</h2>
                </Link>
                <IoIosArrowForward className='text-xl'/>
                <h2 className='text-xl'>{text}</h2>
              </div>
            </div>
            {/* image section */}
            <div className='pt-4 md:pt-0'>
              <img src={image} alt="" className='animate-pulse' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrimaryHero
