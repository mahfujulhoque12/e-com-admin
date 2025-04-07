import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MediaFormData {
  attachment: {
    name: string;
    size: number;
    type: string;
  } | null;
  multipuleFile: { name: string; size: number; type: string }[];
  video: string;
  allowYouTube: boolean;
  cardTitle?:string;
}

const initialState: MediaFormData = {
  attachment: null,
  multipuleFile: [],
  video: "",
  allowYouTube: false,
  cardTitle:"",
};

const mediaSlice = createSlice({
  name: "media",
  initialState,
  reducers: {
    setMediaFormData: (
      state,
      action: PayloadAction<Partial<MediaFormData>>
    ) => {
      return { ...state, ...action.payload };
    },
    resetMediaForm: () => initialState,
  },
});

export const { setMediaFormData, resetMediaForm } = mediaSlice.actions;
export default mediaSlice.reducer;
