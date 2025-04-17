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

const brandApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBrand: builder.query<PaginatedResponse, number>({
      query: (page=1) => `api/brand?page=${page}`,
    }),
  }),
});

export const { useGetBrandQuery } = brandApi;
