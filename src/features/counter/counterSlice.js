import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 500,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 100;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    onNull: (state) => {
      state.value = 0;
    },
  },
});

console.log(counterSlice);

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, onNull } = counterSlice.actions;

export default counterSlice.reducer;
