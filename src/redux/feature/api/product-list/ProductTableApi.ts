import { apiSlice } from "../apiSlice";
import { StaticImageData } from "next/image";

export interface Product {
  id: number;
  name: string;
  img: string | StaticImageData;
  slug: string;
  sku: string;
  stock: string;
  price: number;
  quantity: number;
  category: number;
  status: string;
}

export const productTableApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProductTable: builder.query<Product[], void>({
      query: () => "api/product-table",
    }),
  }),
});

export const { useGetProductTableQuery } = productTableApi;
