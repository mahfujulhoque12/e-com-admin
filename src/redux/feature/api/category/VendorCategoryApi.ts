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
interface PaginatedResponse {
  data: Product[];
  currentPage: number;
  totalPages: number;
  totalItems: number;
}
const categoryApi = apiSlice.injectEndpoints({
  endpoints: (bulder) => ({
    getVendorCategoryTable: bulder.query<PaginatedResponse, number>({
      query: (page=1) => `/api/vendor-category?page=${page}`,
    }),
  }),
});

export const { useGetVendorCategoryTableQuery } = categoryApi;
