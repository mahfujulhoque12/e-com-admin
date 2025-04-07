import { ProductTypes } from "@/types/product";
import { apiSlice } from "../apiSlice";

const shopListApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getShopListProducts: builder.query<ProductTypes[], void>({
      query: () => ({
        url: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/shop-list`,
      }),
    }),
  }),
});

export const { useGetShopListProductsQuery } = shopListApi;
