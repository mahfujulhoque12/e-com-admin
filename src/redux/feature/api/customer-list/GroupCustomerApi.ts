import { apiSlice } from "./../apiSlice";
import { StaticImageData } from "next/image";

interface Product {
    id: number;
    groupId: number;
    name: string;
    groupColor: string;
    groupDes: string;
    img: string | StaticImageData;
    totalCustomer: number;
    status: string;
  }

  interface PaginatedResponse {
    data: Product[];
    currentPage: number;
    totalPages: number;
    totalItems: number;
  }
  
  
const groupCustomerListApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getGroupCustomer: builder.query<PaginatedResponse, number>({
      query: (page=1) => `/api/group-customer?page=${page}`,
    }),
  }),
});

export const { useGetGroupCustomerQuery } = groupCustomerListApi;
