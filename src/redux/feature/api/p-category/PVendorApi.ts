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

interface PaginatedResponse {
  data: Product[];
  currentPage: number;
  totalPages: number;
  totalItems: number;
}

const pVendorCategoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPVendorCategoryTable: builder.query<PaginatedResponse, number>({
      query: (page=1) => `/api/p-vendor-category?page=${page}`,
    }),
  }),
});

export const { useGetPVendorCategoryTableQuery } = pVendorCategoryApi;
