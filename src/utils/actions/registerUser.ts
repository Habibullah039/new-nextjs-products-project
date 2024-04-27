
"use server" ;

import { FormRegister } from "@/types";


export const registerUser = async (data : FormRegister) => {

    const res = await fetch(`${process.env.BACKEND_URL}/register`, {
        method:"POST" ,
        headers:{
            "Content-Type":"application/json" ,
        } ,

        body:JSON.stringify(data) ,
        cache : "no-store" ,

    }) ;

    const UserInfo = await res.json() ;

    return UserInfo ;

};





