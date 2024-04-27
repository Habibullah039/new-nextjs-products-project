import FlashSaleCard from "@/components/card/FlashSaleCard/FlashSaleCard";
import { Data } from "@/types";


const FlashSaleAllPage = async() => {

    const data = await fetch("https://multi-product-nextjs-server.vercel.app/flash-sale", {
        cache : "no-store" ,
    });
    const sales = await data.json();
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 ml-[80px] ">
            {
                sales.map((sale:Data) => (

                    <FlashSaleCard key={sale._id} sale={sale} />
                ))
            }
        </div>
    );
};

export default FlashSaleAllPage;