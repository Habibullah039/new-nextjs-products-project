import FlashDetailCard from "@/components/card/FlashDetailCard/FlashDetailCard";
import { Data, DataId } from "@/types";


export const generateStaticParams = async () => {

    const data = await fetch("https://multi-product-nextjs-server.vercel.app/flash-sale");
    const sales = await data.json() ;

    return  sales.slice(0 , 4).map((sale : Data) => ({

        flashSaleId : sale._id ,
    }));
    
} ;


const FlashSaleDetails = async ({params} :DataId) => {

    const data = await fetch(`https://multi-product-nextjs-server.vercel.app/flash-sale/${params.flashSaleId}` , {
        cache : "no-store" ,
    }) ;
    const fSaleDetail = await data.json() ;


    return (
        <div>
            <h1 className="text-xl font-bold pt-10 ml-10">Product / Flash Sale / {fSaleDetail.product}</h1>
            <FlashDetailCard fSaleDetail={fSaleDetail} />
        </div>
    );
};

export default FlashSaleDetails;