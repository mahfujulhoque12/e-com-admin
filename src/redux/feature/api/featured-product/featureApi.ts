import { ProductTypes } from "@/types/product";
import { apiSlice } from "../apiSlice";

const featuredApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFeaturedProducts: builder.query<ProductTypes[], void>({
      query: () => ({
        url: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/feature-card`,
      }),
    }),
  }),
});

export const { useGetFeaturedProductsQuery } = featuredApi;
