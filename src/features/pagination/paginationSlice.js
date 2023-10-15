import { createSlice } from '@reduxjs/toolkit';
import ContentLoader from 'react-content-loader';

const initialState = {
  value: 1,
};

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    changePage: (state, payload) => {
      state.value = payload.payload;
    },
    nextPage: (state) => {
      state.value += 1;
    },
    prevPage: (state) => {
      state.value -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changePage, nextPage, prevPage } = paginationSlice.actions;

export default paginationSlice.reducer;
