import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";


const CommonLayout = async ({children} : {children : React.ReactNode}) => {

    const session = await getServerSession(authOptions);
    return (
        <>
            <Navbar session={session}/>
           <div className="min-h-screen">{children}</div>
           <Footer />
        </>
    );
};

export default CommonLayout;