

const ProductDetails = ({product}) => {
  return (
    <>
   
   <div className="relative flex flex-col md:flex-row items-center p-4 rounded-md group">
      {/* Image Section */}
      <div className="flex justify-center items-center  md:w-[180px] h-[160px] overflow-hidden bg-[#eff3ed] rounded-md">
        <img src={product.image} alt={product.name} className=" object-contain" />
      </div>
      {/* Text Section */}
      <div className="flex flex-col justify-center items-start pl-4 mt-4 md:mt-0 ml-4">
        <h2 className="text-lg font-medium">{product.name}</h2>
        <p className="text-sm max-w-xs text-gray-600 mt-2">{product.description}</p>
        <p className="text-md max-w-sm font-semibold mt-2">${product.price}</p>
        <div className="my-4">
        <button className="px-4 py-2 border border-[#EFF3ED] rounded-full group-hover:bg-secondary group-hover:text-white transition duration-200">Add To Cart</button>
        </div>
      </div>
      {/* Text Border */}
      <div className="absolute left-20 z-[-1] inset-0 border border-gray-300 rounded-md "></div>
    </div>
    </>
  )
}

export default ProductDetails