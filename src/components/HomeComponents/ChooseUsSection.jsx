import chooseMan from '../../assets/choose-man.png';
import fFood from '../../assets/f-food.png';
import lFood from '../../assets/l-food.png';
import tFood from '../../assets/t-food.png'
import ProgressBar from './ProgressBar';

const ChooseUsSection = () => {
  return (
    <div className="flex flex-col mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          {/* image section */}
          <div className="relative mt-6 lg:mt-0">
            {/* Main image */}
            <img src={chooseMan} alt="Choose Man" className="block pt-5 md:w-[90%]" />
            <img src={lFood} alt="Left Food" className="absolute top-0 left-28 transform md:-translate-x-8 w-16 md:w-20 lg:w-32" />
            <img src={fFood} alt="First Food" className="absolute  bottom-40 md:bottom-60 lg:bottom-44  transform md:-translate-x-8 w-16 md:w-24 lg:w-40" />
            <img src={tFood} alt="Third Food" className="absolute bottom-5 md:bottom-20 lg:bottom-4 left-20 transform lg:translate-y-6 w-16 lg:w-36 md:w-20 " />
          </div>
          {/* content section */}
          <div className="">
            <span className='text-secondary text-lg font-medium'>Why Chose Us</span>
            <h1 className='text-4xl md:text-4xl lg:text-6xl font-semibold lg:leading-[85px] pt-4 text-primary'>Bringing nature's <br /> bounty to your plate</h1>
            <p className='pt-4 text-zinc-400 max-w-md'>Agriculture and farming are essential industries that involve the cultivation of crops, raising of livestock, and production</p>
            {/* progress section */}
            <ProgressBar />
            {/* button section */}
            <div className='pt-7'>
              <button className="relative text-xl bg-third text-white py-3 px-10 rounded-full overflow-hidden group">
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Read More</span>
                </span>
                <div className="absolute inset-0 bg-secondary  transition-all duration-300 ease-in-out transform scale-x-0 scale-y-0 group-hover:scale-x-100 group-hover:scale-y-100 origin-center"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseUsSection