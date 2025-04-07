import { ProductTypes } from "@/types/product";
import { apiSlice } from "../apiSlice";

const recomandedApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRecomandedProducts: builder.query<ProductTypes[], void>({
      query: () => ({
        url: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/recomanded`,
      }),
    }),
  }),
});

export const { useGetRecomandedProductsQuery } = recomandedApi;
