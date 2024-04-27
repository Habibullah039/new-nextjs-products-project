"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';


import Image from 'next/image';
import bannerImg2 from "@/assets/banner-image/bannerImg-2.jpg";
import bannerImg1 from "@/assets/banner-image/bannerImg-1.jpg";
import bannerImg3 from "@/assets/banner-image/bannerImg-3.jpg";
import bannerImg4 from "@/assets/banner-image/bannerImg-4.jpg";



const Slider = () => {


    return (
        <>

            <Swiper

                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}

                modules={[Autoplay, Pagination]}

                
                

            >
                <SwiperSlide className='relative'>
                    <Image

                        src={bannerImg2}
                        width={1000}
                        alt="Banner2"
                        className='block mx-auto mt-3'                      

                    />

                    {/* <div className='absolute top-[50px] left-[500px] text-white'>

                        <p className='text-xl font-medium mt-1'>Special Offer</p>
                        <h1 className='text-7xl font-bold my-3'>SALE</h1>
                        <h3 className='text-4xl font-bold'>UP  TO  50%  OFF</h3>

                    </div> */}
                </SwiperSlide>
                <SwiperSlide>
                    <Image

                        src={bannerImg1}
                        width={1000}
                        alt="Banner1"
                        className='block mx-auto mt-3' 
                        

                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image

                        src={bannerImg3}
                        width={1000}
                        alt="Banner3"
                        className='block mx-auto mt-3' 

                    />

                </SwiperSlide>

                <SwiperSlide>
                    <Image

                        src={bannerImg4}
                        width={1000}
                        alt="Banner4"
                        className='block mx-auto mt-3' 

                    />

                </SwiperSlide>
            </Swiper>


        </>
    );
};

export default Slider;

