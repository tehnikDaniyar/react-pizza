import { createSlice } from '@reduxjs/toolkit';
import ContentLoader from 'react-content-loader';

const initialState = {
  value: 0,
};

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    changePage: (state, { i }) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = i;
      console.log('state of paginationSlice:', state.value);
    },
  },
});

// Action creators are generated for each case reducer function
export const { changePage } = paginationSlice.actions;

export default paginationSlice.reducer;
