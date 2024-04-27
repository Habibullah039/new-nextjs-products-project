import LatestProductCard from "@/components/card/LatestProductCard/LatestProductCard";
import { Data } from "@/types";


const ProductPage =async () => {

    const data = await fetch("https://multi-product-nextjs-server.vercel.app/products", {
        cache : "no-store" ,
    });
    const products = await data.json();
    return (
        <div className="bg-gray-100">
            <h1 className="text-2xl text-center font-bold text-orange-600 pt-[70px] mb-10">All Products</h1>

            <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-4 ml-[40px] ">
                {
                    products.map((product: Data) => (

                        <LatestProductCard key={product._id} product={product} />


                    ))
                }
            </div>

        </div>
    );
};

export default ProductPage;