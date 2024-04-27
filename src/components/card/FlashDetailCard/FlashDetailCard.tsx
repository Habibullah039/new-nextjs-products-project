'use client'

import { useState } from 'react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Thumbs } from 'swiper/modules'
import Swipe from 'swiper';




import { Data, FormValues2 } from '@/types'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'





interface Props {
    onSwiper: ((swiper: Swipe) => void);
}



const FlashDetailCard = ({ fSaleDetail }: { fSaleDetail: Data }) => {


    

    const [thumbsSwiper, setThumbsSwiper] = useState<Swipe>();


    const {
        handleSubmit
    } = useForm<FormValues2>();

    const router = useRouter();

    const handleOrder =async() => {

        const order = {
            id: fSaleDetail._id,
            name:  fSaleDetail.product,
            model: fSaleDetail.name,
            image: fSaleDetail.image[1],
            price: fSaleDetail.price,
        }

        // console.log(order);

        const res = await fetch("https://multi-product-nextjs-server.vercel.app/orders" , {
       
            method: "POST" ,
            headers: {
                "Content-Type":"application/json" ,
            } ,
    
            body: JSON.stringify(order) ,
            cache: "no-store" ,
    
        });
    
        const orderInfo = await res.json() ;
        router.push('/dashboard');
        return orderInfo;  

    }









    return (



        <div className="md:flex justify-between md:w-[900px] md:h-[450px] bg-white shadow-2xl rounded p-10 mt-10 md:ml-10">


            <div className='md:w-96 w-64'>
                <Swiper

                    loop={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Thumbs]}

                >
                    <SwiperSlide>
                        <Image
                            src={fSaleDetail.image[0]}
                            width={300}
                            height={100}
                            alt={fSaleDetail.product}
                            className="rounded-xl h-64"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src={fSaleDetail.image[1]}
                            width={300}
                            height={100}
                            alt={fSaleDetail.product}
                            className="rounded-xl h-64"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Image
                            src={fSaleDetail.image[2]}
                            width={300}
                            height={100}
                            alt={fSaleDetail.product}
                            className="rounded-xl h-64"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Image
                            src={fSaleDetail.image[3]}
                            width={300}
                            height={100}
                            alt={fSaleDetail.product}
                            className="rounded-xl h-64"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Image
                            src={fSaleDetail.image[4]}
                            width={300}
                            height={100}
                            alt={fSaleDetail.product}
                            className="rounded-xl h-64"
                        />
                    </SwiperSlide>



                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    slidesPerView={5}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Thumbs]}
                    className='my-5'

                >
                    <SwiperSlide>
                        <Image
                            src={fSaleDetail.image[0]}
                            width={50}
                            height={30}
                            alt={fSaleDetail.product}
                            className="rounded-xl md:h-32 h:16"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src={fSaleDetail.image[1]}
                            width={50}
                            height={30}
                            alt={fSaleDetail.product}
                            className="rounded-xl md:h-32 h:16"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Image
                            src={fSaleDetail.image[2]}
                            width={50}
                            height={30}
                            alt={fSaleDetail.product}
                            className="rounded-xl md:h-32 h:16"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Image
                            src={fSaleDetail.image[3]}
                            width={50}
                            height={30}
                            alt={fSaleDetail.product}
                            className="rounded-xl md:h-32 h:16"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Image
                            src={fSaleDetail.image[4]}
                            width={50}
                            height={30}
                            alt={fSaleDetail.product}
                            className="rounded-xl md:h-32 h:16"
                        />
                    </SwiperSlide>

                </Swiper>
            </div>

            <div>

                <h2 className="text-md font-bold mt-10 mr-[80px]">{fSaleDetail.name} {fSaleDetail.product}</h2>

                <div className="flex items-center mt-3">
                    <p className="text-orange-600 text-md">
                        $ {fSaleDetail.price}
                    </p>


                    <p className="text-gray-700 text-[11px] ml-3">
                        ${fSaleDetail.pPrice}
                    </p>
                    <div className="bg-gray-500 h-[1px] w-[58px] ml-[-50px]"></div>

                </div>

                <div className="flex mt-3">

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-500">
                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-500">
                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-500">
                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-500">
                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-500">
                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                    </svg>


                </div>

                <form onSubmit={handleSubmit(handleOrder)}>

                    <input type="submit" value='Add To Cart' className=" btn btn-primary text-white hover:text-purple-500 mt-10" />

                </form>

            </div>


        </div>


    );
};

export default FlashDetailCard;











