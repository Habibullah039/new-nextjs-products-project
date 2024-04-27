import FlashSale from "@/components/ui/HomePage/FlashSale/FlashSale";
import LatestProducts from "@/components/ui/HomePage/LatestProducts/LatestProducts";
import Slider from "@/components/ui/HomePage/Slider/Slider";



const page = async () => {

  const data = await fetch("https://multi-product-nextjs-server.vercel.app/flash-sale", {
        next: {
            revalidate: 30
        },
    });
    const sales = await data.json();

  
  return (
    <div>
      <Slider />
      <FlashSale  sales={sales} />
      <LatestProducts />
      
    </div>
  );
};

export default page;



