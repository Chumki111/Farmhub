import { Link } from 'react-router-dom'
import logo from '../../assets/sr1 (1).svg'

const ServiceCard = ({service}) => {
  return (
    <div className="">
    <img 
      src={service.image_1} 
      alt="" 
      className="rounded-xl"
    />
    <div className="bg-[#F4FAF5] flex px-4 pb-3 rounded-b-xl border-2 border-b-primary text-primary">
      <Link to={`/service/${service._id}`}>
      <h2 className="text-3xl pt-3 pb-6 font-medium text-wrap">{service.title}</h2>
      </Link>
      <img src={logo} alt="" className="ml-auto" />
    </div>
  </div>
  )
}

export default ServiceCard