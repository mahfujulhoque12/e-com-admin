import { apiSlice } from "./../apiSlice";
import { StaticImageData } from "next/image";

interface Product {
  id: number;
  name: string;
  img: string | StaticImageData;
  slug: string;
  totalSubCategory: number;
  status: string;
}

const pVendorCategoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPVendorCategoryTable: builder.query<Product[], void>({
      query: () => "/api/p-vendor-category",
    }),
  }),
});

export const { useGetPVendorCategoryTableQuery } = pVendorCategoryApi;
