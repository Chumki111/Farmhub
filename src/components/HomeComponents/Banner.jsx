import image from '../../assets/hero1.png'

const Banner = () => {
  return (
    <div className='flex flex-col'>
    <div className="bg-gradient-to-r from-[#1f4e3d] via-[#285545] to-[#7EA799] text-white">
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
         <div className='flex flex-col md:flex-row justify-between mt-10'>
        <div className='pt-8 md:pt-10'>
         <h1 className='text-4xl md:text-5xl lg:text-7xl font-semibold md:leading-[85px]'>Plowing the earth</h1>
         <h2 className='text-4xl md:text-5xl lg:text-7xl font-[300px] md:leading-[85px]'><span className="hope">harvesting</span> hope</h2>
         <p>Education is the key to studeny Unlock your potential through learning.
         Expand your horizons with the most</p>
        </div>
        <div className=''>
        <img src={image} alt="" />
        </div>
         </div>
      </div>

      </div>
    </div>
  )
}

export default Banner