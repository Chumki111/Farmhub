import { IoMdArrowRoundForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
const Card = ({ image }) => {
    return (
        <div className="border-[#EFF3ED] border-[1px] rounded  ">
            <div className='flex  gap-5 py-3 px-5 '>
                <img src={image} alt="" className='' />
                <div className='bg-[#EFF3ED] h-36 w-[2px]'></div>
                <div className=''>
                    <h1 className='text-2xl font-semibold text-primary hover:text-secondary'>Green Grow</h1>
                    <p className='max-w-sm space-y-3 py-3 text-lg text-zinc-400'>Agriculture and farming are <br /> essential industries</p>
                    <Link to="/services">
                        <button className='flex text-lg text-zinc-400 items-center space-x-5'><span>Read More</span><IoMdArrowRoundForward className='text-secondary ' /></button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
Card.propTypes = {
    image: PropTypes.string
}
export default Card