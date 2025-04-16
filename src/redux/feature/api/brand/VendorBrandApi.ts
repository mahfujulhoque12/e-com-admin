import { apiSlice } from "./../apiSlice";
import { StaticImageData } from "next/image";

interface Product {
  id: number;
  name: string;
  img: string | StaticImageData;
  slug: string;
  totalSubCategory: number;
  status: string;
}

const vendorBrandApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getVendorBrand: builder.query<Product[], void>({
      query: () => "/api/vendor-brand",
    }),
  }),
});

export const { useGetVendorBrandQuery } = vendorBrandApi;
