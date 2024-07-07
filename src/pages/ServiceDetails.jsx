import { useLoaderData } from "react-router-dom"
import PrimaryHero from "../components/Banner/PrimaryHero";
import LeftSide from "../components/Services/LeftSide";
import RightSide from "../components/Services/RightSide";
const ServiceDetails = () => {
  const service = useLoaderData();
  console.log(service);
  return (
    <>
      <PrimaryHero text={'Service Details'} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row mt-28 space-y-8 md:space-y-0 md:space-x-8">
          <div className="">
            <RightSide />
          </div>
          <div className="flex-1">
            <LeftSide service={service} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ServiceDetails