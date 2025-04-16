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
const blockCustomerListApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getblockCustomer: builder.query<Product[], void>({
      query: () => "/api/blocked-customer",
    }),
  }),
});

export const { useGetblockCustomerQuery } = blockCustomerListApi;
