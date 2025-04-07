import { ProductTypes } from "@/types/product";
import { apiSlice } from "../apiSlice";

const sliderApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSliderProducts: builder.query<ProductTypes[], void>({
      query: () => ({
        url: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/slider`,
      }),
    }),
  }),
});

export const { useGetSliderProductsQuery } = sliderApi;
