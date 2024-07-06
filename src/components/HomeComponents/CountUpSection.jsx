import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { useState } from "react";
// images from assets file
import count1 from '../../assets/count1.svg'
import count2 from '../../assets/count2.svg'
import count3 from '../../assets/count3.svg'
import count4 from '../../assets/count4.svg'

const CountUpSection = () => {
  const [counter, setCounter] = useState(false)
  return (
    <div className="mb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-xl shadow-[#dbf0d0] rounded-2xl py-10 px-2">
        <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
          <div className="flex justify-evenly flex-wrap">
            {/* first card */}
            <div className="flex justify-center items-center  space-y-5">
              <div className=''>
                <h2 className="text-3xl lg:text-5xl lg:font-bold">
                  {counter && <CountUp start={0} end={200} duration={2} delay={0} />}
                  <span className="text-primary">+</span></h2>
                <div className="flex flex-col md:flex-row justify-start md:justify-center items-start md:items-center gap-3  space-y-0 md:space-y-4">
                  <img src={count1} alt="" />
                  <h2 className="font-semibold pb-4">Team member</h2>
                </div>
              </div>
            </div>
            {/* second card */}
            <div className="flex justify-center items-center  space-y-5">
              <div className=''>
                <h2 className="text-3xl lg:text-5xl lg:font-bold">
                  {counter && <CountUp start={0} end={300} duration={2} delay={0} />}
                  <span className="text-primary">K+</span></h2>
                <div className="flex flex-col md:flex-row justify-start md:justify-center items-start md:items-center gap-3  space-y-2 md:space-y-4">
                  <img src={count2} alt="" />
                  <h2 className="font-semibold pb-4">Winning award</h2>
                </div>
              </div>
            </div>
            {/* third card */}
            <div className="flex justify-center items-center space-y-5">
              <div className=''>
                <h2 className="text-3xl lg:text-5xl lg:font-bold">
                  {counter && <CountUp start={0} end={100} duration={2} delay={0} />}
                  <span className="text-primary">+</span></h2>
                <div className="flex flex-col md:flex-row justify-start md:justify-center items-start md:items-center gap-3  space-y-2 md:space-y-4">
                  <img src={count3} alt="" />
                  <h2 className="font-semibold pb-4">Complete project</h2>
                </div>
              </div>
            </div>
            {/* forth card  */}
            <div className="flex justify-center items-center  space-y-5">
              <div className=''>
                <h2 className="text-3xl lg:text-5xl lg:font-bold">
                  {counter && <CountUp start={0} end={900} duration={2} delay={0} />}
                  <span className="text-primary">+</span></h2>
                <div className="flex flex-col md:flex-row justify-start md:justify-center items-start md:items-center gap-3  space-y-2 md:space-y-4">
                  <img src={count4} alt="" />
                  <h2 className="font-semibold pb-4">Client review</h2>
                </div>
              </div>
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </div>
  )
}

export default CountUpSection