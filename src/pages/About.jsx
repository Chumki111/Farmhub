import PrimaryHero from "../components/Banner/PrimaryHero"
import ChooseUsSection from "../components/HomeComponents/ChooseUsSection"
import CompanySection from "../components/HomeComponents/CompanySection"
import MessageSection from "../components/HomeComponents/MessageSection"
import ServicesSection from "../components/HomeComponents/ServicesSection"
import Testimonial from "../components/HomeComponents/Testimonial"


const About = () => {
  return (
    <>
    <PrimaryHero text={'About Us'}/>
    <ChooseUsSection/>
    <div className="mt-16">
    <ServicesSection/>
    </div>
    <Testimonial/>
    <MessageSection/>
    <CompanySection/>
    </>
  )
}

export default About