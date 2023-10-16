import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';

export const sortSlice = createSlice({
  name: 'sort',
  initialState: {
    id: 0,
    title: 'популярности',
    value: 'rating',
  },
  reducers: {
    setSortProperty: (state, action) => {
      { ...state, ...action.payload }
      
    },
  },
});

export const { setSortProperty } = sortSlice.actions;
export default sortSlice.reducer;
