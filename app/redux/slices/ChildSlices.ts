import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChildrenState {
  children: any | null; // Remplacez `any` par le type approprié
}

const initialState: ChildrenState = {
  children: null,
};

const childrenSlice = createSlice({
  name: "children",
  initialState,
  reducers: {
    setChildren: (state: ChildrenState, action: PayloadAction<any>) => { // Spécifiez le type de `state`
      state.children = action.payload;
    },
  },
});

export const { setChildren } = childrenSlice.actions;
export default childrenSlice.reducer;