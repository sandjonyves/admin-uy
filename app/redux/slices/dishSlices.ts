import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface dishState {
  dishes: any | null; // Remplacez `any` par le type approprié
  dish :any |null;
}

const initialState: dishState = {
    dishes:null,
  dish: null,
};

const dishSlice = createSlice({
  name: "dish",
  initialState,
  reducers: {
    setDishes: (state: dishState, action: PayloadAction<any>) => { 
      state.dishes = action.payload;
    },
    setDish :(state: dishState, action: PayloadAction<any>) => { 
        state.dish = action.payload;
      },
  },
});

export const { setDish ,setDishes} = dishSlice.actions;
export default dishSlice.reducer;