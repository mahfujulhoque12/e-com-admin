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

export const reviewListApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getReviewList: builder.query<Product[], void>({
      query: () => "api/review-list",
    }),
  }),
});

export const { useGetReviewListQuery } = reviewListApi;
