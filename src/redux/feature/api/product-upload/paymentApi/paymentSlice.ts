import { apiSlice } from "../../apiSlice";

export const mediaApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPayment: builder.query({
      query: (id: string) =>
        `/api/v1/product-upload/payment/get-payment?id=${id}`,
    }),

    createPayment: builder.mutation({
      query: (formData) => ({
        url: "/api/v1/product-upload/payment/create-payment",
        method: "POST",
        body: formData,
      }),
    }),

    updatePayment: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/api/v1/product-upload/payment/update-payment?id=${id}`, // ✅ Ensure the `id` is correctly included
        method: "PUT",
        body: formData,
      }),
    }),
  }),
});

export const {
  useGetPaymentQuery,
  useCreatePaymentMutation,
  useUpdatePaymentMutation,
} = mediaApi;
