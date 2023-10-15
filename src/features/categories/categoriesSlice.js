import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    changeCategory: (state, payload) => {
      console.log('action categoriy', payload.payload.value);
      state.value = payload.payload.value;
    },
  },
});

export const { changeCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
