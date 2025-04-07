import { apiSlice } from "../../apiSlice";

export const variationsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getVariationsForm: builder.query({
      // The argument (id) is passed in when you call the generated hook
      query: (id: string) =>
        `/api/v1/product-upload/variations/get-variations?id=${id}`,
    }),

    // New POST mutation for creating a customer profile
    createVriationsProfile: builder.mutation({
      query: (formData) => ({
        url: "/api/v1/product-upload/variations/create-variations",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: formData,
      }),
    }),
    // New PUT mutation for updating a customer profile
    updateVariationsProfile: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/api/v1/product-upload/variations/update-variations?id=${id}`,
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: formData,
      }),
    }),
  }),
});

export const {
  useGetVariationsFormQuery,
  useCreateVriationsProfileMutation,
  useUpdateVariationsProfileMutation,
} = variationsApi;
