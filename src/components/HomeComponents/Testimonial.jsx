import image1 from '../../assets/flower-badge.png'
import testimonial from '../../assets/testimonial.png'
import image2 from '../../assets/re1.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { RiPauseMiniLine } from "react-icons/ri";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
const Testimonial = () => {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* content section */}
        <div>
          <div className='flex justify-end items-end'>
            <img src={image1} alt="" className='px-6 py-10 hidden md:block' />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center p-4">
            <div className="md:w-1/3 flex justify-center">
              <img src={testimonial} alt="Testimonial" className="w-80" />
            </div>
            <div className="md:w-2/3 w-full mt-4 md:mt-0">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper py-5"
              >


                <SwiperSlide>
                  <div className='p-8 w-full md:w-[80%] bg-white rounded-md shadow-xl shadow-[#dbf0d0]'>
                    <div className="flex justify-between items-center">

                      <RiPauseMiniLine className='text-4xl md:text-5xl lg:text-7xl text-third' />

                      <Rating
                        style={{ maxWidth: 180 }}
                        value={4.5}
                        readOnly
                      />
                    </div>
                    <p className='text-start  py-5 text-xl text-zinc-400 leading-8'>
                      Agriculture and farming are essential industries that involve the
                      cultivation of crops, raising of
                      livestock, and
                      production a of food and other agricultural products Agriculture farming are
                      essential industries involve
                      cultivation
                    </p>
                    <div className='py-5 flex space-x-4'>
                      <div className="h-24 w-24">
                        <img src={image2} alt="" className='h-full w-full object-contain  rounded-md' />
                      </div>
                      <div className="pt-2"><h3 className='text-3xl font-semibold text-primary'>Haney Copper</h3>
                        <span className='text-zinc-400 block text-start pt-1'>CEO</span></div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='p-8 w-full md:w-[80%] bg-white rounded-md shadow-xl shadow-[#dbf0d0]'>
                    <div className="flex justify-between items-center">

                      <RiPauseMiniLine className='text-4xl md:text-5xl lg:text-7xl text-third' />

                      <Rating
                        style={{ maxWidth: 180 }}
                        value={4}
                        readOnly
                      />
                    </div>
                    <p className='text-start  py-5 text-xl text-zinc-400 leading-8'>
                      Agriculture and farming are essential industries that involve the
                      cultivation of crops, raising of
                      livestock, and
                      production a of food and other agricultural products Agriculture farming are
                      essential industries involve
                      cultivation
                    </p>
                    <div className='py-5 flex space-x-4'>
                      <div className="h-24 w-24">
                        <img src={image2} alt="" className='h-full w-full object-contain  rounded-md' />
                      </div>
                      <div className="pt-2"><h3 className='text-3xl font-semibold text-primary'>Haney Copper</h3>
                        <span className='text-zinc-400 block text-start pt-1'>CEO</span></div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='p-8 w-full md:w-[80%] bg-white rounded-md shadow-xl shadow-[#dbf0d0]'>
                    <div className="flex justify-between items-center">

                      <RiPauseMiniLine className='text-4xl md:text-5xl lg:text-7xl text-third' />

                      <Rating
                        style={{ maxWidth: 180 }}
                        value={5}
                        readOnly
                      />
                    </div>
                    <p className='text-start  py-5 text-xl text-zinc-400 leading-8'>
                      Agriculture and farming are essential industries that involve the
                      cultivation of crops, raising of
                      livestock, and
                      production a of food and other agricultural products Agriculture farming are
                      essential industries involve
                      cultivation
                    </p>
                    <div className='py-5 flex space-x-4'>
                      <div className="h-24 w-24">
                        <img src={image2} alt="" className='h-full w-full object-contain  rounded-md' />
                      </div>
                      <div className="pt-2"><h3 className='text-3xl font-semibold text-primary'>Haney Copper</h3>
                        <span className='text-zinc-400 block text-start pt-1'>CEO</span></div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial