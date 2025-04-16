import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InputState {
  [key: string]: string;
}

const initialState: InputState = {};

const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    updateInputField: (
      state,
      action: PayloadAction<{ name: string; value: string }>
    ) => {
      state[action.payload.name] = action.payload.value;
    },
    resetInputFields: () => initialState,
  },
});

export const { updateInputField, resetInputFields } = inputSlice.actions;
export default inputSlice.reducer;
