// /redux/feature/api/paymentListApi.ts
import { apiSlice } from "./../apiSlice";
import { StaticImageData } from "next/image";

interface Product {
  id: number;
  paymentId: number;
  paymentMethod: string;
  invoice: string;
  payment: string;
  img: string | StaticImageData;
  price: number;
  status: string;
  date: string;
}

interface PaginatedResponse {
  data: Product[];
  currentPage: number;
  totalPages: number;
  totalItems: number;
}

const paymentListApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPaymentList: builder.query<PaginatedResponse, number>({
      query: (page = 1) => `/api/payment-list?page=${page}`,
    }),
  }),
});

export const { useGetPaymentListQuery } = paymentListApi;
