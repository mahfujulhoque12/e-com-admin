import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  isMobileMenuOpen: false,
};

const toggleSidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    // Toggle the sidebar open/closed
    toggleAppSlidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
    // Toggle the mobile menu open/closed
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
    // Set mobile menu state explicitly
    setMobileMenuOpen: (state, action) => {
      state.isMobileMenuOpen = action.payload;
    },
  },
});

export const { toggleAppSlidebar, toggleMobileMenu, setMobileMenuOpen } =
  toggleSidebarSlice.actions;
export default toggleSidebarSlice.reducer;
