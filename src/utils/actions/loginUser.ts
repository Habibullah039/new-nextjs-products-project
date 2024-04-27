"use server" ;

import { FormLogin } from "@/types";


export const loginUser = async (data : FormLogin) => {

    const res = await fetch(`${process.env.BACKEND_URL}/login` , {
       
        method: "POST" ,
        headers: {
            "Content-Type":"application/json" ,
        } ,

        body: JSON.stringify(data) ,
        cache: "no-store" ,


    });

    const LoginInfo = await res.json() ;

    return LoginInfo;
    
};