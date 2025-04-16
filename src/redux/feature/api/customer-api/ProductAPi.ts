import { apiSlice } from "../apiSlice";

export interface Customer {
  name: string;
  email: string;
  img: string;
}

export const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Customer[], string>({
      query: (searchTerm) => `/api/product?search=${searchTerm}`,
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
