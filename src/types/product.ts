import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export type Product = {
    _id:string,
    title:string,
    description:string;
    price:number;
    productImage: SanityImageSource; 
    quantity:number
    tags:string[]
    shipmentDetails?: {
        carrier: string;
        trackingNumber: string;
      };

}