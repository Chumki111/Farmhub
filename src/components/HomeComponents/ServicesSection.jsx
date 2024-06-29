import { IoMdArrowRoundForward } from 'react-icons/io'
import image1 from '../../assets/count1.svg'
import image2 from '../../assets/wheat-sesh.svg'
import image3 from '../../assets/smart-flower.svg'

const ServicesSection = () => {
    return (
        <div className="flex flex-col">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* content section */}
                <div className='text-center'>
                    <span className='text-secondary text-lg font-medium text-center'>Our Latest Service</span>
                    <h1 className='text-4xl md:text-4xl lg:text-6xl font-semibold lg:leading-[60px] pt-4 text-primary whitespace-pre-line max-w-2xl mx-auto'>
                        Harvesting dreams one crop at a time
                    </h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-7">
                    {/* card 1 */}
                    <div className="border-[#EFF3ED] border-[1px] rounded  ">
                        <div className='flex  gap-5 py-3 px-5 '>
                        <img src={image1} alt="" className=''/>
                        <div className='bg-[#EFF3ED] h-36 w-[2px]'></div>
                        <div className=''>
                            <h1 className='text-2xl font-semibold text-primary hover:text-secondary'>Green Grow</h1>
                            <p className='max-w-sm space-y-3 py-3 text-lg text-zinc-400'>Agriculture and farming are <br /> essential industries</p>
                            <button className='flex text-lg text-zinc-400 items-center space-x-5'><span>Read More</span><IoMdArrowRoundForward className='text-secondary '/></button>
                        </div>
                        </div>
                    </div>
                    {/* card two */}
                    <div className="border-[#EFF3ED] border-[1px] rounded  ">
                        <div className='flex gap-5 py-3 px-5 '>
                        <img src={image2} alt="" className=''/>
                        <div className='bg-[#EFF3ED] h-36 w-[2px]'></div>
                        <div className=''>
                            <h1 className='text-2xl font-semibold text-primary hover:text-secondary'>Green Grow</h1>
                            <p className='max-w-sm space-y-3 py-3 text-lg text-zinc-400'>Agriculture and farming are <br /> essential industries</p>
                            <button className='flex text-lg text-zinc-400 items-center space-x-5'><span>Read More</span><IoMdArrowRoundForward className='text-secondary '/></button>
                        </div>
                        </div>
                    </div>
                    {/* card three */}
                    <div className="border-[#EFF3ED] border-[1px] rounded  ">
                        <div className='flex gap-5 py-3 px-5 '>
                        <img src={image3} alt="" className=''/>
                        <div className='bg-[#EFF3ED] h-36 w-[2px]'></div>
                        <div className=''>
                            <h1 className='text-2xl font-semibold text-primary hover:text-secondary'>Green Grow</h1>
                            <p className='max-w-sm space-y-3 py-3 text-lg text-zinc-400'>Agriculture and farming are <br /> essential industries</p>
                            <button className='flex text-lg text-zinc-400 items-center space-x-5'><span>Read More</span><IoMdArrowRoundForward className='text-secondary '/></button>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ServicesSection