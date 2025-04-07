import { createSlice } from "@reduxjs/toolkit";

interface ProfileState {
  activeTab: string;
}

const initialState: ProfileState = {
  activeTab: "product-details", // Default tab
};

const productUploadSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
});

export const { setActiveTab } = productUploadSlice.actions;
export default productUploadSlice.reducer;
