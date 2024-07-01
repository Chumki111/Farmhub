import logo from '../assets/logo-light.png'
import backgroundImage from '../assets/footer-wheat.png'
import SubscribeSection from '../components/HomeComponents/SubscribeSection'
const Footer = () => {
  return (
   <div className="relative">
    <div className="relative top-56"><SubscribeSection/></div>
     <div className="bg-primary bg-cover bg-no-repeat mt-20 pt-36" 
      style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex">
        <img src={logo} alt="Logo" className="" />
      </div>
    </div>
  </div>
   </div>
  )
}

export default Footer