import { apiSlice } from './../apiSlice';
import { StaticImageData } from "next/image";

interface Product {
  id: number;
  name: string;
  img: string | StaticImageData;
  slug: string;
  totalSubCategory: number;
  status: string;
}


const pCategoryApi =apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        getPCategoryTable :builder.query<Product[],void>({
            query:()=>"api/p-category",
        })
    })
})

export const {useGetPCategoryTableQuery}=pCategoryApi;