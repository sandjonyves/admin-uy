import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface proteineState {
  proteine: any | null; // Remplacez `any` par le type approprié
}

const initialState: proteineState = {
  proteine: null,
};

const proteineSlice = createSlice({
  name: "proteine",
  initialState,
  reducers: {
    setProteine: (state: proteineState, action: PayloadAction<any>) => { // Spécifiez le type de `state`
      state.proteine = action.payload;
    },
  },
});

export const { setProteine } = proteineSlice.actions;
export default proteineSlice.reducer;