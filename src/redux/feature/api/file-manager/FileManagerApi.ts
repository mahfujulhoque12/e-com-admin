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

interface PaginatedResponse {
  data: Product[];
  currentPage: number;
  totalPages: number;
  totalItems: number;
}

export const fileManagerApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFileManager: builder.query<PaginatedResponse, number>({
      query: (page=1) => `api/file-manager?page=${page}`,
    }),
  }),
});

export const { useGetFileManagerQuery } = fileManagerApi;
