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

export const vendorTableAPi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getVendorTable: builder.query<Product[], void>({
      query: () => "/api/vendor-table",
    }),
  }),
});

export const { useGetVendorTableQuery } = vendorTableAPi;
