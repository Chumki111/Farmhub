import Subscribe from '../../assets/subscribe.png'
import { CiLocationArrow1 } from "react-icons/ci";
const SubscribeSection = () => {
    return (
        <div className=" ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col justify-between items-center lg:flex-row bg-[#EFF3ED] rounded-xl border-t-4 border-secondary p-5 lg:p-16">
                    <div className="lg:block hidden">
                        <img src={Subscribe} alt="Subscribe" className="md:absolute md:bottom-0 " />
                    </div>
                    <div className="lg::mt-0 w-full lg:w-1/2 lg::pl-12">
                        <h2 className="text-4xl md:text-5xl text-primary pt-4">Subscribe to <br /> our newsletter</h2>
                        <p className="text-primary py-4 text-lg">It is a long established fact that a reader will be distracted</p>
                        <div className="relative mt-4">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="w-full pl-4 pr-16 py-3 outline-none text-primary bg-transparent border border-primary rounded-[30px]"
                                placeholder="Your Email"
                            />
                            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-third text-primary p-2 rounded-full">
                                <CiLocationArrow1 className="text-2xl cursor-pointer" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubscribeSection