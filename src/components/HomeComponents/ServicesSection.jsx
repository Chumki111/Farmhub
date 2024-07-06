import image1 from '../../assets/count1.svg'
import image2 from '../../assets/wheat-sesh.svg'
import image3 from '../../assets/smart-flower.svg'
import Card from '../Services/Card'

const ServicesSection = () => {
    return (
        <div className="flex flex-col">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* content section */}
                <div className='text-center'>
                    <span className='text-secondary text-lg font-medium text-center'>Our Latest Service</span>
                    <h1 className='text-4xl md:text-4xl lg:text-6xl font-semibold lg:leading-[60px] pt-4 text-primary whitespace-pre-line max-w-2xl mx-auto'>
                        Harvesting dreams one crop at a time
                    </h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-7">
                    {/* card 1 */}
                    <Card image={image1} />
                    {/* card two */}
                    <Card image={image2} />
                    {/* card three */}
                    <Card image={image3} />
                </div>
            </div>
        </div>
    )
}

export default ServicesSection