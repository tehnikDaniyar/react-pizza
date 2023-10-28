import { createSlice } from '@reduxjs/toolkit';

const searchRequest = '';

export const searchSlice = createSlice({
  name: 'search',
  initialState: searchRequest,
  reducers: {
    setSearchRequest: (state, actions) => {
      return (state = actions.payload);
    },
  },
});

export const { setSearchRequest } = searchSlice.actions;
export default searchSlice.reducer;
