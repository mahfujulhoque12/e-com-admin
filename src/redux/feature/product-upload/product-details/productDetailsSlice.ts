import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// ✅ Specification Type
export interface Specification {
  key: string;
  value: string;
}

// ✅ FormData Type
export interface FormData {
  productType:string;
  productTitle: string;
  category: string;
  subCategory: string;
  brand: string;
  madeInOne: string;
  MadeInTwo: string;
  description: string;
  price: string;
  sellPrice: string;
  length: string;
  width: string;
  depth: string;
  measurement: string;
  totalStock: string;
  stockUnit: string;
  ProductSKU: string;
  QRCode: string;
  warrentyPeriod: string;
  warrentyUnit: string;
  specifications: Specification[];
  madeInOneOptions: { label: string; value: string }[];
  madeInTwoOptions: { label: string; value: string }[];
}

// ✅ Initial State
const initialState: FormData = {
  productType:"",
  productTitle: "",
  category: "",
  subCategory: "",
  brand: "",
  madeInOne: "",
  MadeInTwo: "",
  description: "",
  price: "",
  sellPrice: "",
  length: "",
  width: "",
  depth: "",
  measurement: "",
  totalStock: "",
  stockUnit: "",
  ProductSKU: "",
  QRCode: "",
  warrentyPeriod: "",
  warrentyUnit: "",
  specifications: [{ key: "", value: "" }],
  madeInOneOptions: [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ],
  madeInTwoOptions: [
    { label: "Shirt", value: "shirt" },
    { label: "Pent", value: "pent" },
  ],
};

// ✅ Create Slice
const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {
    // ✅ Update Form Data
    setFormData: (state, action: PayloadAction<Partial<FormData>>) => {
      return { ...state, ...action.payload };
    },

    // ✅ Specifications Management
    addSpecification: (state) => {
      state.specifications.push({ key: "", value: "" });
    },
    updateSpecification: (
      state,
      action: PayloadAction<{
        index: number;
        field: "key" | "value";
        value: string;
      }>
    ) => {
      state.specifications[action.payload.index][action.payload.field] =
        action.payload.value;
    },
    removeSpecification: (state, action: PayloadAction<number>) => {
      state.specifications = state.specifications.filter(
        (_, i) => i !== action.payload
      );
    },

    // ✅ Manage `madeInOneOptions`
    addMadeInOneOption: (
      state,
      action: PayloadAction<{ label: string; value: string }>
    ) => {
      state.madeInOneOptions.push(action.payload);
    },

    // ✅ Manage `madeInTwoOptions`
    addMadeInTwoOption: (
      state,
      action: PayloadAction<{ label: string; value: string }>
    ) => {
      state.madeInTwoOptions.push(action.payload);
    },

    // ✅ Reset Entire Form
    resetForm: () => initialState,
  },
});

// ✅ Export Actions
export const {
  setFormData,
  addSpecification,
  updateSpecification,
  removeSpecification,
  resetForm,
  addMadeInOneOption,
  addMadeInTwoOption,
} = productDetailsSlice.actions;

// ✅ Export Reducer
export default productDetailsSlice.reducer;
