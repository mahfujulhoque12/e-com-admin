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

const brandApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBrand: builder.query<Product[], void>({
      query: () => "api/brand",
    }),
  }),
});

export const { useGetBrandQuery } = brandApi;
