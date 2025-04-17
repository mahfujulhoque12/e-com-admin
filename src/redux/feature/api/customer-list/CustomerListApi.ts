import { apiSlice } from "./../apiSlice";
import { StaticImageData } from "next/image";

interface Product {
  id: number;
  orderNumber: number;
  img: string | StaticImageData;
  price: number;
  status: string;
  customerName: string;
  customerNumber: number;
  date: string;
  email: string;
  location: string;
  totalSpent: number;
  locationImg: string | StaticImageData;
  phoneNumber: number;
  customerBehave: string;
}
interface PaginatedResponse {
  data: Product[];
  currentPage: number;
  totalPages: number;
  totalItems: number;
}

const customerListApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCustomerListApi: builder.query<PaginatedResponse, number>({
      query: (page=1) => `api/customer-list?page=${page}`,
    }),
  }),
});

export const { useGetCustomerListApiQuery } = customerListApi;
