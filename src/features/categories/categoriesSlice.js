import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    changeCategory: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
