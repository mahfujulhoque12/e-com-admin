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
  product: string;
  date: string;
  d7: number;
}
const orderListApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOrderList: builder.query<Product[], void>({
      query: () => "/api/order-list",
    }),
  }),
});

export const { useGetOrderListQuery } = orderListApi;
