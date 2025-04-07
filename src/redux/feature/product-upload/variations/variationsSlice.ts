import {
  AttributeEnum,
  ProductTypeEnum,
  ShippinEnum,
  VariationNameEnum,
} from "@/types/VariationInput";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Variation {
  id: number; // Unique identifier

  productType: ProductTypeEnum | "";
  variationName?: VariationNameEnum | "";
  attribute?: AttributeEnum | "";
  totalStock?: string;
  regularPrice?: string;
  salePrice?: string;
  shipping?: ShippinEnum | "";
  shippinUnit?: string;
}

interface VariationsState {
  variations: Variation[];
}

const initialState: VariationsState = {
  variations: [
    {
      id: Date.now(), // Ensures one variation exists initially
      attribute: "",
      variationName: "",
      regularPrice: "",
      totalStock: "",
      salePrice: "",
      shipping: "",
      shippinUnit: "",
      productType: "",
    },
  ],
};

const variationsSlice = createSlice({
  name: "variations",
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<Partial<FormData>>) => {
      return { ...state, ...action.payload };
    },

    addVariation: (state) => {
      state.variations.push({
        id: Date.now(), // Unique ID
        attribute: "",
        variationName: "",
        regularPrice: "",
        totalStock: "",
        salePrice: "",
        shipping: "",
        shippinUnit: "",
        productType: "",
      });
    },

    updateVariation: (
      state,
      action: PayloadAction<{ id: number; data: Partial<Variation> }>
    ) => {
      const { id, data } = action.payload;
      const index = state.variations.findIndex(
        (variation) => variation.id === id
      );
      if (index !== -1) {
        state.variations[index] = { ...state.variations[index], ...data };
      }
    },
    removeVariation: (state, action: PayloadAction<number>) => {
      if (state.variations.length > 1) {
        state.variations = state.variations.filter(
          (variation) => variation.id !== action.payload
        );
      }
    },
  },
});

export const { addVariation, updateVariation, removeVariation, setFormData } =
  variationsSlice.actions;
export default variationsSlice.reducer;
