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
interface PaginatedResponse {
  data: Product[];
  currentPage: number;
  totalPages: number;
  totalItems: number;
}


export const vendorTableAPi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getVendorTable: builder.query<PaginatedResponse, number>({
      query: (page=1) => `/api/vendor-table?page=${page}`,
    }),
  }),
});

export const { useGetVendorTableQuery } = vendorTableAPi;
