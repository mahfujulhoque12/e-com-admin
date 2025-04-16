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
  
const groupCustomerListApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getGroupCustomer: builder.query<Product[], void>({
      query: () => "/api/group-customer",
    }),
  }),
});

export const { useGetGroupCustomerQuery } = groupCustomerListApi;
