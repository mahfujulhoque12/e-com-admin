import { apiSlice } from "../apiSlice";
import { StaticImageData } from "next/image";

interface Product {
  id: number;
  paymentId: number;
  payment: string;
  status: string;
  date: string;
  product: string;
  rating: number;
  review: string;
  customerBehave: string;
  img: string | StaticImageData;
  customerName: string;
}

interface PaginatedResponse {
  data: Product[];
  currentPage: number;
  totalPages: number;
  totalItems: number;
}

export const reviewListApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getReviewList: builder.query<PaginatedResponse, number>({
      query: (page = 1) => `api/review-list?page=${page}`,
    }),
  }),
});

export const { useGetReviewListQuery } = reviewListApi;
