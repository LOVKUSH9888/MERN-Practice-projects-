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
    setToZero: (state) => {
      state.value = 0;
    }
  },
});

// Destructing
export const { increment, decrement, setToZero } = counterSlice.actions;

export const counterReducer = counterSlice.reducer;


