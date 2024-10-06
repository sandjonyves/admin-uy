import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface fruitState {
  fruit: any | null; // Remplacez `any` par le type approprié
}

const initialState: fruitState = {
  fruit: null,
};

const fruitSlice = createSlice({
  name: "fruit",
  initialState,
  reducers: {
    setFruit: (state: fruitState, action: PayloadAction<any>) => { // Spécifiez le type de `state`
      state.fruit = action.payload;
    },
  },
});

export const { setFruit } = fruitSlice.actions;
export default fruitSlice.reducer;