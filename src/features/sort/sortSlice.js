import { createSlice } from '@reduxjs/toolkit';

export const sortSlice = createSlice({
  name: 'sort',
  initialState: {
    id: 100,
    title: 'популярности',
    value: 'rating',
  },
  reducers: {
    setSortProperty: (state, action) => {
      return { ...state.obj, ...action.payload };
    },
    testFunction: () => {
      alert('test');
    },
  },
});

export const { setSortProperty, testFunction } = sortSlice.actions;
export default sortSlice.reducer;
