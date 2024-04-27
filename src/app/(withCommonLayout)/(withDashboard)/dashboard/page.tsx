import { FormValues2 } from "@/types";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";





const Dashboard = async () => {


    const session = await getServerSession(authOptions)


    const data = await fetch('https://multi-product-nextjs-server.vercel.app/orders', {


        cache: "no-store",

    })


    const orders = await data.json();




    return (
        <div>
            {
                session?.user && (
                    <>
                        <h1 className="text-2xl text-center mt-10">Welcome To Your Dashboard</h1>
                        <h1 className="text-2xl text-center mt-10">{session?.user?.email}</h1>

                        <div>
                            {
                                orders.map((order: FormValues2) => (

                                    <div key={order.productId} className="md:flex justify-between items-center md:w-96">

                                        <Image
                                            src={order.image}
                                            alt={order.name}
                                            width={100}
                                            height={70}
                                            className="mx-auto"
                                        />

                                        <h2 className="text-md font-bold mb-3">{order.name} {order.model}</h2>

                                        <p className="text-orange-600 text-md">
                                            $ {order.price}
                                        </p>

                                    </div>
                                ))
                            }
                        </div>


                    </>
                )
            }

        </div>
    );
};

export default Dashboard;