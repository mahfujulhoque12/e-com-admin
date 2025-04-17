import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PaginationState {
  [key: string]: {
    currentPage: number;
    totalPages: number;
  };
}

const initialState: PaginationState = {};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setCurrentPage: (
      state,
      action: PayloadAction<{ key: string; page: number }>
    ) => {
      const { key, page } = action.payload;
      if (!state[key]) state[key] = { currentPage: 1, totalPages: 1 };
      state[key].currentPage = page;
    },
    setTotalPages: (
      state,
      action: PayloadAction<{ key: string; totalPages: number }>
    ) => {
      const { key, totalPages } = action.payload;
      if (!state[key]) state[key] = { currentPage: 1, totalPages: 1 };
      state[key].totalPages = totalPages;
    },
  },
});

export const { setCurrentPage, setTotalPages } = paginationSlice.actions;
export default paginationSlice.reducer;
