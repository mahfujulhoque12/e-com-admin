import { apiSlice } from "../../apiSlice";

export const mediaApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMedia: builder.query({
      query: (id: string) => `/api/v1/product-upload/media/get-media?id=${id}`,
    }),

    createmedia: builder.mutation({
      query: (formData) => ({
        url: "/api/v1/product-upload/media/create-media",
        method: "POST",
        body: formData,
      }),
    }),

    updatemedia: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/api/v1/product-upload/media/update-media?id=${id}`, // ✅ Ensure the `id` is correctly included
        method: "PUT",
        body: formData,
      }),
    }),
  }),
});

export const {
  useGetMediaQuery,
  useCreatemediaMutation,
  useUpdatemediaMutation,
} = mediaApi;


