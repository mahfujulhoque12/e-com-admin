import { apiSlice } from "../apiSlice";
import { StaticImageData } from "next/image";

interface Product {
  id: number;
  fileName: string;
  fileSize: string;
  author: string;
  owner: string;
  lastModify: string;
  members: string[] | StaticImageData[];
}

export const fileManagerApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFileManager: builder.query<Product[], void>({
      query: () => "api/file-manager",
    }),
  }),
});

export const { useGetFileManagerQuery } = fileManagerApi;
