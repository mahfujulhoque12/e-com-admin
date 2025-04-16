import { apiSlice } from "../apiSlice";

export interface Customer {
  name: string;
  email: string;
  img: string;
}

export const customerApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCustomers: builder.query<Customer[], string>({
      query: (searchTerm) => `/api/customer?search=${searchTerm}`,
    }),
  }),
});

export const { useGetCustomersQuery } = customerApi;
