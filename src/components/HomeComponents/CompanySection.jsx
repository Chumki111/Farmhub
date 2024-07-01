import image1 from '../../assets/sp1.png'
import image2 from '../../assets/sp2.png'
import image3 from '../../assets/sp4.png'
import image4 from '../../assets/sp5.png'
const CompanySection = () => {
  return (
    <>
     
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
   <div className="overflow-hidden whitespace-nowrap">
   
   <marquee>
    <div className='flex justify-evenly items-center space-x-4'>
    <img src={image1} alt="Company Logo 1" />
          <img src={image4} alt="Company Logo 4" />
          <img src={image2} alt="Company Logo 2" />
          <img src={image1} alt="Company Logo 1" />
          <img src={image3} alt="Company Logo 3" />
          <img src={image1} alt="Company Logo 1" />
          <img src={image4} alt="Company Logo 4" />
          <img src={image2} alt="Company Logo 2" />
    </div>
   </marquee>
   </div>
    </div>
    </>
    
  )
}

export default CompanySection