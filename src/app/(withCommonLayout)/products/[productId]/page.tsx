import ProductDetailCard from '@/components/card/ProductDetailCard/ProductDetailCard';
import { Data, DataId2 } from '@/types';
import React from 'react';


export const generateStaticParams = async () => {

    const data = await fetch("https://multi-product-nextjs-server.vercel.app/products");
    const products = await data.json() ;

    return  products.slice(0 , 20).map((product : Data) => ({

        productId : product._id ,
    }));
    
} ;

const ProductDetailPage = async ({params} :DataId2) => {

    const data = await fetch(`https://multi-product-nextjs-server.vercel.app/product/${params.productId}` , {
        cache : "no-store" ,
    }) ;
    const productDetail = await data.json() ;


    return (
        <div>
            <h1 className="text-xl font-bold pt-10 ml-10">Product / All Products / {productDetail.product}</h1>

            <ProductDetailCard productDetail={productDetail} />
        </div>

    );

};

export default ProductDetailPage;