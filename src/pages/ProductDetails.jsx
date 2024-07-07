import { useLoaderData } from "react-router-dom"
import PrimaryHero from "../components/Banner/PrimaryHero"
import RightSide from "../components/Services/RightSide";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
const ProductDetails = () => {
  const product = useLoaderData();

  return (
    <>
      <PrimaryHero text={"Product Details"} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row mt-28 space-y-8 md:space-y-0 md:space-x-8">
          <div className="">
            <RightSide />
          </div>
          <div className="flex-1">
            {/* <LeftSide service={service} /> */}
            <div className="flex">
              <div className="w-[350px] h-[400px] flex justify-center items-center bg-[#EFF3ED] rounded-md">
                <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col  items-start ml-4 border border-[#EFF3ED] rounded-md p-6">
                <h2 className="text-4xl font-medium">{product.name}</h2>
                <p className="max-w-sm text-gray-500 pt-4">{product.description}</p>
<Rating
                  style={{ maxWidth: 110, color: 'EDD61F' }}
                  value={4}
                  readOnly className="pt-3"
                />
                <p className="text-gray-500 pt-1">{product.reviews.length} Customer Review</p>

                <p className="text-3xl text-secondary  font-semibold mt-3">${product.price}</p>
                <p className="text-gray-500 text-lg pt-3">{product.category}</p>
                <div className="">

                </div>
                <div className='mt-6'>
                  <button className="relative  bg-secondary text-white py-3 px-12 rounded-2xl overflow-hidden group hover:text-primary w-full">
                    <span className="relative z-10 flex items-center justify-center">
                      <span>Add To Cart</span>
                    </span>
                    <div className="absolute inset-0 bg-third transition-all duration-300 ease-in-out transform scale-x-0 scale-y-0 group-hover:scale-x-100 group-hover:scale-y-100 origin-center"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetails