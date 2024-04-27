"use client";
import { Data, FormValues2 } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";







const ProductDetailCard = ({ productDetail }: { productDetail: Data }) => {

    const {
        handleSubmit
    } = useForm<FormValues2>();

    const router = useRouter();

    const handleOrder =async() => {

        const order = {
            id: productDetail._id,
            name:  productDetail.product,
            model: productDetail.name,
            image: productDetail.image,
            price: productDetail.price,
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
        <div className="md:flex justify-center md:w-[900px] md:h-[450px] bg-white shadow-2xl rounded p-10 mt-10 md:ml-10">

            <Image
                src={productDetail.image}
                width={300}
                height={100}
                alt={productDetail.product}
                className="rounded-xl md:h-64 h-40"
            />

            <div className="ml-10">

                <h2 className="text-md font-bold mt-10 mr-[80px]">{productDetail.name} {productDetail.product}</h2>

                <div className="flex items-center mt-3">
                    <p className="text-orange-600 text-md">
                        $ {productDetail.price}
                    </p>


                    <p className="text-gray-700 text-[11px] ml-3">
                        ${productDetail.pPrice}
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

export default ProductDetailCard;