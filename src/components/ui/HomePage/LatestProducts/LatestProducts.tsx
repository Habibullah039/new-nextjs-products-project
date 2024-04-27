import LatestProductCard from "@/components/card/LatestProductCard/LatestProductCard";
import { Data } from "@/types";
import Link from "next/link";


const LatestProducts = async () => {

    const data = await fetch("https://multi-product-nextjs-server.vercel.app/products", {
        next: {
            revalidate: 30,
        },
    });
    const products = await data.json();
    return (
        <div className="bg-gray-100">
            <h1 className="text-2xl font-bold text-orange-600 pt-[70px] mb-10 ml-[50px]">Latest Products</h1>

            <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-4 ml-[40px] ">
                {
                    products.slice(0, 8).map((product: Data) => (

                        <LatestProductCard key={product._id} product={product} />


                    ))
                }
            </div>


            <div className="text-center">
                <Link href='/products' className=" btn btn-secondary hover:bg-orange-600 hover:text-blue-500 my-10"> See All Products </Link>
            </div>
        </div>
    );
};

export default LatestProducts;