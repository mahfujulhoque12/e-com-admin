import { StaticImageData } from "next/image";
import { apiSlice } from "../apiSlice";

interface Product {
  id: number;
  name: string;
  img: string | StaticImageData;
  slug: string;
  totalSubCategory: number;
  status: string;
}

const categoryApi = apiSlice.injectEndpoints({
    endpoints:(bulder)=>({
        getCategoryTable:bulder.query<Product[],void>({
            query:()=>"api/category"
        })
    })
})

export const {useGetCategoryTableQuery}=categoryApi;