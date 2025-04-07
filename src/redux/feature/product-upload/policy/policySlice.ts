import {
  CookieEnum,
  DataEnum,
  PaymentEnum,
  PrivacyEnum,
  RefundEnum,
  RefurnEnum,
  ShippingEnum,
  WarrantyEunm,
} from "@/types/PolicyTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PolicyFormState {
  return: RefurnEnum | "";
  refund: RefundEnum | "";
  warranty: WarrantyEunm | "";
  data: DataEnum | "";
  payment: PaymentEnum | "";
  shipping: ShippingEnum | "";
  cookie: CookieEnum | "";
  privacy: PrivacyEnum | "";
  youTube: string;
}

const initialState: PolicyFormState = {
  return: "",
  refund: "",
  warranty: "",
  data: "",
  payment: "",
  shipping: "",
  privacy: "",
  cookie: "",
  youTube: "",
};

const policySlice = createSlice({
  name: "policy",
  initialState,
  reducers: {
    updatePolicy: (
      state,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      action: PayloadAction<{ field: keyof PolicyFormState; value: any }>
    ) => {
      state[action.payload.field] = action.payload.value;
    },
    
    setFormData: (state, action: PayloadAction<Partial<PolicyFormState>>) => {
      return { ...state, ...action.payload };
    },

    resetPolicy: () => initialState,
  },
});

export const { updatePolicy, setFormData, resetPolicy } = policySlice.actions;
export default policySlice.reducer;
