import { useQuery } from "@tanstack/react-query"
import PrimaryHero from "../components/Banner/PrimaryHero"
import { getAllServices } from "../api/service"


const Services = () => {
  const {data:services} = useQuery({
    queryKey:['services'],
    queryFn:async() => getAllServices()
  })
  console.log(services);
  return (
    <>
    <PrimaryHero text={"Services"}/>
    </>
  )
}

export default Services