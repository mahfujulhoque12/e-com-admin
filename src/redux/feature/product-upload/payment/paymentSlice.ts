import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PaymentState {
  paymentMethods: {
    COD: boolean;
    Visa: boolean;
    MasterCard: boolean;
    SSL: boolean;
  };
  GST: {
    enabled: boolean;
    percent: string;
  };
}

const initialState: PaymentState = {
  paymentMethods: {
    COD: false,
    Visa: false,
    MasterCard: false,
    SSL: false,
  },
  GST: {
    enabled: false,
    percent: "",
  },
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setPaymentData: (state, action: PayloadAction<PaymentState>) => {
      return action.payload; // Overwrites state with API data
    },
    togglePaymentMethod: (
      state,
      action: PayloadAction<keyof PaymentState["paymentMethods"]>
    ) => {
      state.paymentMethods[action.payload] =
        !state.paymentMethods[action.payload];
    },
    toggleGST: (state) => {
      state.GST.enabled = !state.GST.enabled;
    },
    setGSTPercent: (state, action: PayloadAction<string>) => {
      state.GST.percent = action.payload;
    },
  },
});

export const { setPaymentData, togglePaymentMethod, toggleGST, setGSTPercent } =
  paymentSlice.actions;
export default paymentSlice.reducer;
