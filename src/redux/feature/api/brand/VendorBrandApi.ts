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

const vendorBrandApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getVendorBrand: builder.query<PaginatedResponse, number>({
      query: (page=1) => `/api/vendor-brand?page=${page}`,
    }),
  }),
});

export const { useGetVendorBrandQuery } = vendorBrandApi;
