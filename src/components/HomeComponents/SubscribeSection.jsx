import Subscribe from '../../assets/subscribe.png'
import { CiLocationArrow1 } from "react-icons/ci";
const SubscribeSection = () => {
    return (
        <div className="flex flex-col">
            <div className="">
                <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-[#EFF3ED] flex flex-col md:flex-row justify-evenly  space-x-4 rounded-xl border-t-4 border-primary md:p-0 p-5">
                        <div className="">
                            <img src={Subscribe} alt="" />
                        </div>
                        <div className="mt-20">
                            <h2 className='text-5xl text-primary pt-4'>Subscribe to <br /> our newsletter</h2>
                            <p className='text-primary py-4 text-lg'>It is a long established fact that a reader will be distracted</p>
                            <div className="relative w-[90%] mb-4">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="w-full pl-4 pr-12 py-4 outline-none text-primary bg-transparent border border-primary rounded-[30px]"
                                    placeholder="Your Email"
                                />
                                <CiLocationArrow1 className="absolute right-4 top-1/2 transform -translate-y-1/2 text-primary bg-third p-2 text-5xl rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubscribeSection