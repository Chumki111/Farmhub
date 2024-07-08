import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import PropTypes from 'prop-types';
const ReviewSection = ({product}) => {
  return (
    <div className="border border-[#EFF3ED] mt-16 rounded-md px-12 py-16">
    <div className="text-center">
      
      <h2 className="text-4xl text-secondary font-medium mt-2">R E V I E W S</h2>
    </div>
    <div className="flex justify-between">
    <div className="mt-8">
      <h2 className="text-3xl font-medium">Based on {product.reviews.length} Reviews</h2>
    
    <div className="mt-8 space-y-4">
      {product.reviews.map((review, index) => (
        <div key={index} className="border border-gray-300 rounded-md p-4">
          <div className="flex items-center mb-2">
           
            <Rating
                  style={{ maxWidth: 110, color: 'EDD61F' }}
                  value={review.rating}
                  readOnly className="pt-3"
                />
           
          </div>
          <p className="text-lg font-medium">"{review.comment}"</p>
          <p className="text-right mt-2">- {review.customer}</p>
        </div>
      ))}
    </div>
    </div>
    <div className="mt-8">
        <h2 className="text-3xl font-medium">Add your Comment</h2>
        <div className="">
        <form action="" className="">
  <div className="flex mb-4 mt-4">
    <h2 className="mr-4">Rating : </h2>
    <Rating
      style={{ maxWidth: 110, color: 'EDD61F' }}
      value={4}
      readOnly
      className="pt-3"
    />
  </div>

  <div className="flex items-center mb-4">
    <label htmlFor="name" className="mr-4 text-primary font-medium">Your Name</label>
    <input
      type="text"
      name="name"
      id="name"
      className="pl-4 py-2 outline-none text-primary border border-primary rounded-3xl placeholder:text-primary"
      placeholder="Your Name"
    />
  </div>

  <div className="flex items-center mb-4">
    <label htmlFor="email" className="mr-4 text-primary font-medium">Your Email</label>
    <input
      type="email"
      name="email"
      id="email"
      className="pl-4 py-2 outline-none text-primary border border-primary rounded-3xl placeholder:text-primary"
      placeholder="Your Email"
    />
  </div>

  <div className="flex items-center mb-4">
    <label htmlFor="area" className="mr-4 text-primary font-medium">Your Area</label>
    <input
      type="text"
      name="area"
      id="area"
      className="pl-4 py-2 outline-none text-primary border border-primary rounded-3xl placeholder:text-primary"
      placeholder="Your Area"
    />
  </div>

  <div className="flex items-center mb-4">
    <label htmlFor="message" className="mr-4 text-primary font-medium">Your Message</label>
    <textarea
      name="message"
      id="message"
      className="pl-4 py-2 outline-none text-primary border border-primary rounded-3xl placeholder:text-primary"
      placeholder="Your Message"
      rows="3"
    ></textarea>
  </div>

  <div className="flex items-center mb-4">
 
    <button
      type="submit"
      className="relative bg-secondary text-white py-4 text-base rounded-2xl overflow-hidden group hover:text-primary w-full"
    >
      <span className="relative z-10 items-center">
        <span>Submit Now</span>
      </span>
      <div className="absolute inset-0 bg-third transition-all duration-300 ease-in-out transform scale-x-0 scale-y-0 group-hover:scale-x-100 group-hover:scale-y-100 origin-center"></div>
    </button>
  </div>
</form>


            
            </div>
        </div>
    </div>
    </div>
    
 
  )
}
ReviewSection.propTypes={
    product:PropTypes.object
}
export default ReviewSection