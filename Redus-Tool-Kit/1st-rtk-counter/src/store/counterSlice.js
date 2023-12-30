// src/store/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  //   Reducer
  reducers: {
    // Actions
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// Destructing
export const { increment, decrement } = counterSlice.actions;

export const counterReducer = counterSlice.reducer;


