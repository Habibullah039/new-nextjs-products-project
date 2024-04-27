"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';


import FlashSaleCard from "@/components/card/FlashSaleCard/FlashSaleCard";
import { Data } from "@/types";








const FlashSale = ({ sales }: { sales: Data[] }) => {



    return (
        <div className='bg-gray-200 rounded-lg mt-[100px] md:pb-[100px] pb-10'>
            <h1 className="text-2xl font-bold text-orange-600 py-[50px] ml-[50px]">Flash Sale</h1>


            <Swiper
                slidesPerView={3}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}

                navigation={true}

                modules={[Autoplay, Navigation]}
                
                
            >

                {sales.map((sale) => (

                    <SwiperSlide key={sale._id}>

                        <FlashSaleCard key={sale._id} sale={sale} />

                    </SwiperSlide>

                ))}

            </Swiper>
        </div>
    );
};

export default FlashSale;


