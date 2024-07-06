import details_svg from '../../assets/details-desert.svg'
import flower from '../../assets/details-flower.svg'
import PropTypes from 'prop-types'; 

const LeftSide = ({ service }) => {
    return (
        <>
            <div className="h-[30%]">
                <img src={service.image_1} alt="" className="w-full h-full object-cover rounded-lg shadow-md" />
            </div>
            <h2 className="text-4xl text-primary font-medium py-5">{service.headings_1}</h2>
            <p>{service.descriptions_1}</p>
            <div className="flex flex-col justify-between md:flex-row md:space-x-4 mt-8">
                <div className="bg-[#EFF3ED] flex  p-4 items-center relative rounded-md">
                    <h4 className="text-4xl text-primary p-4 font-medium">
                        Prepare <br /> the soil
                    </h4>
                    <div
                        className="bg-third relative top-2 transform -translate-y-1/2 -right-[140px] md:-right-4  p-2 "
                        style={{ borderRadius: '39px 4.307px 39px 0px' }}
                    >
                        <img src={details_svg} alt="Details" className="w-16 h-16" />
                    </div>
                </div>
                <div className="bg-[#EFF3ED] flex p-4 items-center relative rounded-md   mt-4 md:mt-0">
                    <h4 className="text-4xl text-primary p-4 font-medium">
                        Prepare <br /> the soil
                    </h4>
                    <div
                        className="bg-third relative top-2 transform -translate-y-1/2 -right-[140px] md:-right-4 p-2"
                        style={{ borderRadius: '39px 4.307px 39px 0px' }}
                    >
                        <img src={flower} alt="Details" className="w-16 h-16" />
                    </div>
                </div>
            </div>
            <h2 className="text-4xl text-primary font-medium py-5 mt-8">{service.headings_2}</h2>
            <p>{service.descriptions_2}</p>
            <div className="flex flex-col md:flex-row gap-10 mt-10">
                <div className="w-full md:w-1/2">
                    <img src={service.images_4} alt="" className="rounded-xl w-full" />
                </div>
                <div className="w-full md:w-1/2">
                    <img src={service.images_3} alt="" className="rounded-xl w-full" />
                </div>
            </div>

        </>
    )
}
LeftSide.propTypes={
    service:PropTypes.object
}
export default LeftSide