const SkeletonProductCard = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center p-4 rounded-md group animate-pulse">
      {/* Image Section */}
      <div className="flex justify-center items-center  md:w-[180px] h-[160px] overflow-hidden bg-[#eff3ed] rounded-md">
        <div className="w-full h-full bg-gray-300"></div>
      </div>
      {/* Text Section */}
      <div className="flex flex-col justify-center items-start pl-4 mt-4 md:mt-0 ml-4 w-full">
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3 mb-4"></div>
        <div className="h-6 bg-gray-300 rounded w-1/2 mb-4"></div>
        <div className="h-10 bg-gray-300 rounded w-1/3"></div>
      </div>
      {/* Text Border */}
      <div className="absolute left-20 z-[-1] inset-0 border border-gray-300 rounded-md"></div>
    </div>
  )
}

export default SkeletonProductCard