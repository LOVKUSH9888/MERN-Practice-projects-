import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    //Actions
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { addItem } = cartSlice.actions;

const cartReducer = cartSlice.reducer;
export default cartReducer;
