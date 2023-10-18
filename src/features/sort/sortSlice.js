import { createSlice } from '@reduxjs/toolkit';

export const sortSlice = createSlice({
  name: 'sort',
  initialState: {
    obj: {
      id: 100,
      title: 'популярности',
      value: 'rating',
    },
  },
  reducers: {
    setSortProperty: (state, action) => {
      return { ...state.obj, ...action.payload };
    },
  },
});

export const { setSortProperty } = sortSlice.actions;
export default sortSlice.reducer;
