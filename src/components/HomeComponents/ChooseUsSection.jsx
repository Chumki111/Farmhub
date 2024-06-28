import chooseMan from '../../assets/choose-man.png';
import fFood from '../../assets/f-food.png';
import lFood from '../../assets/l-food.png';
import tFood from '../../assets/t-food.png'

const ChooseUsSection = () => {
  return (
    <div className="flex flex-col mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between">
              {/* image section */}
            <div className="relative">
          {/* Main image */}
          <img src={chooseMan} alt="Choose Man" className="block pt-5 md:w-[90%]" />

          <img src={lFood} alt="Left Food" className="absolute top-0 left-28 transform -translate-x-8" />
  <img src={fFood} alt="First Food" className="absolute bottom-40  transform -translate-x-8" />
  <img src={tFood} alt="Third Food" className="absolute bottom-4 left-20 transform translate-y-6" />
          
        </div>
        {/* content section */}
                 <div className="">
                  <span className='text-secondary text-lg font-medium'>Why Chose Us</span>
                  <h1 className='text-4xl md:text-4xl lg:text-6xl font-semibold md:leading-[85px]'>Bringing nature's <br /> bounty to your plate</h1>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default ChooseUsSection