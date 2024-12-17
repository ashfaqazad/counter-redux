// src/features/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0, // Initial state ka count
};

const counterSlice = createSlice({
  name: 'counter', // Slice ka naam
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1; // Count ko 1 se badhayein
    },
    decrement: (state) => {
      state.count -= 1; // Count ko 1 se ghatayein
    },
    reset: (state) => {
      state.count = 0; // Count ko reset karein
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions; // Actions export karein
export default counterSlice.reducer; // Reducer export karein
