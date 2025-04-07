import { apiSlice } from "../../apiSlice";

export const policyApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getpolicyForm: builder.query({
      // The argument (id) is passed in when you call the generated hook
      query: (id: string) =>
        `/api/v1/product-upload/policy/get-policy?id=${id}`,
    }),

    // New POST mutation for creating a customer profile
    createPolicyProfile: builder.mutation({
      query: (formData) => ({
        url: "/api/v1/product-upload/policy/create-policy",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: formData,
      }),
    }),
    // New PUT mutation for updating a customer profile
    updatePolicyProfile: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/api/v1/product-upload/policy/update-policy?id=${id}`,
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
  useGetpolicyFormQuery,
  useUpdatePolicyProfileMutation,
  useCreatePolicyProfileMutation,
} = policyApi;
