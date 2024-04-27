
export interface Data {
    "_id": string;
    "product": string;
    "name": string;
    "image": string;
    "model": string;
    "pPrice": number;
    "discount": number;
    "price": number;
}


export type FormValues2 = {
    "productId": string;
    "name": string;
    "image": string;
    "model": string;
    "price": number;
};


export type FormLogin = {
    email: string;
    password: string;
};


export type FormRegister = {
    username: string;
    email: string;
    password: string;
    number: number;
};


export interface DataId {

    params : {
        flashSaleId : string;
    }
}

export interface DataId2 {

    params : {
        productId : string;
    }
}