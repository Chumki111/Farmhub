// images from file
import image1 from '../../assets/gl1.jpg'
import image2 from '../../assets/gl2.jpg'
import image3 from '../../assets/gl3.jpg'
import image4 from '../../assets/gl4.jpg'
import image5 from '../../assets/gl5.jpg'
import CountUpSection from './CountUpSection'



const GallarySection = () => {

    return (
        <>
            <div className="flex flex-col mt-10 relative">
                <div className="bg-[#EFF3ED] ">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className='pt-14 pb-36'>
                            <div className='text-center'>
                                <span className='text-secondary text-lg font-medium text-center'>OUR GALLARY</span>
                                <h1 className='text-4xl md:text-4xl lg:text-6xl font-semibold lg:leading-[60px] pt-4 text-primary whitespace-pre-line max-w-2xl mx-auto'>
                                    Bringing nature's bounty
                                    to your plate
                                </h1>
                            </div>
                            <div className="flex flex-col lg:flex-row gap-5 pt-10">
                                <img src={image1} alt="" className='rounded-2xl' />
                                <img src={image2} alt="" className='rounded-2xl ' />
                            </div>
                            <div className="flex flex-wrap md:flex-wrap justify-evenly gap-3 md:gap-0 pt-8">
                                <img src={image3} alt="" className='h-[425px] rounded-2xl' />
                                <img src={image4} alt="" className='h-[425px] rounded-2xl' />
                                <div className="mt-3">
                                    <img src={image5} alt="" className='h-[350px] rounded-2xl' />
                                    {/* button */}
                                    <div className='mt-4'>
                                        <button className="relative text-xl bg-secondary text-white py-3 px-10 rounded-2xl overflow-hidden group hover:text-primary w-full">
                                            <span className="relative z-10 flex items-center justify-center">
                                                <span>View All Photo</span>

                                            </span>
                                            <div className="absolute inset-0 bg-third transition-all duration-300 ease-in-out transform scale-x-0 scale-y-0 group-hover:scale-x-100 group-hover:scale-y-100 origin-center"></div>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* count section */}
                <div className='relative bottom-24'>
                    <CountUpSection/>
                </div>
            </div>
        </>
    )
}

export default GallarySection