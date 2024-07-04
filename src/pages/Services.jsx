import { useQuery } from "@tanstack/react-query"
import PrimaryHero from "../components/Banner/PrimaryHero"
import { getAllServices } from "../api/service"
import ServiceCard from "../components/Card/ServiceCard"


const Services = () => {
  const { data: services } = useQuery({
    queryKey: ['services'],
    queryFn: async () => getAllServices()
  })
  return (
    <>
      <PrimaryHero text={"Services"} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-7 mt-24 group">
          {services?.map(service => <ServiceCard key={service._id} service={service} />)}
        </div>
      </div>
    </>
  )
}

export default Services