// src/redux/feature/formSelections/FormSelectionsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Customer } from "../api/customer-api/CustomerApi";

interface FormSelectionsState {
  selectedCustomer: Customer | null;
  selectedProduct: Customer | null;
  selectedRating: Customer | null;
}

const initialState: FormSelectionsState = {
  selectedCustomer: null,
  selectedProduct: null,
  selectedRating: null,
};

const formSelectionsSlice = createSlice({
  name: "formSelections",
  initialState,
  reducers: {
    setSelectedCustomer: (state, action: PayloadAction<Customer>) => {
      state.selectedCustomer = action.payload;
    },
    setSelectedProduct: (state, action: PayloadAction<Customer>) => {
      state.selectedProduct = action.payload;
    },
    setSelectedRating: (state, action: PayloadAction<Customer>) => {
      state.selectedRating = action.payload;
    },
  },
});

export const {
  setSelectedCustomer,
  setSelectedProduct,
  setSelectedRating,
} = formSelectionsSlice.actions;

export default formSelectionsSlice.reducer;
