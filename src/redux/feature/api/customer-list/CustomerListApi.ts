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
const customerListApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCustomerListApi: builder.query<Product[], void>({
      query: () => "api/customer-list",
    }),
  }),
});

export const { useGetCustomerListApiQuery } = customerListApi;
