import { apiSlice } from "../apiSlice";

export interface Customer {
  name: string;
  email: string;
  img: string;
}

export const ratingApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRating: builder.query<Customer[], string>({
      query: (searchTerm) => `/api/rating?search=${searchTerm}`,
    }),
  }),
});

export const { useGetRatingQuery } = ratingApi;
