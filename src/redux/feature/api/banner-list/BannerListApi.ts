import { apiSlice } from "./../apiSlice";
import { StaticImageData } from "next/image";

interface Product {
  id: number;
  paymentId: number;
  payment: string;
  status: string;
  date: string;
  startDate: string;
  title: string;
  review: string;
  bannerImg: string | StaticImageData;
}

const bannerListApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBannerList: builder.query<Product[], void>({
      query: () => "/api/banner-list",
    }),
  }),
});

export const { useGetBannerListQuery } = bannerListApi;
