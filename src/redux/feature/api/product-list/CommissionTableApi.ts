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

export const commissionTableApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCommissionTable: builder.query<Product[], void>({
      query: () => "/api/commission-table",
    }),
  }),
});

export const { useGetCommissionTableQuery } = commissionTableApi;
