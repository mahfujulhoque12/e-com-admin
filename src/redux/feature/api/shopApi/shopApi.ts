import { ProductTypes } from "@/types/product";
import { apiSlice } from "../apiSlice";

const recomandedApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getShopProducts: builder.query<ProductTypes[], void>({
      query: () => ({
        url: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/shop`,
      }),
    }),
  }),
});

export const { useGetShopProductsQuery } = recomandedApi;
