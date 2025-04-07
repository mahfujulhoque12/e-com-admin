import { apiSlice } from "../../apiSlice";

export const productDetailsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProductForm: builder.query({
      // The argument (id) is passed in when you call the generated hook
      query: (id: string) =>
        `/api/v1/product-upload/product-details/get-product?id=${id}`,
    }),

    // New POST mutation for creating a customer profile
    createProductProfile: builder.mutation({
      query: (formData) => ({
        url: "/api/v1/product-upload/product-details/create-product",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: formData,
      }),
    }),
    // New PUT mutation for updating a customer profile
    updateProductProfile: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/api/v1/product-upload/product-details/update-product?id=${id}`,
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
  useGetProductFormQuery,
  useCreateProductProfileMutation,
  useUpdateProductProfileMutation,
} = productDetailsApi;
