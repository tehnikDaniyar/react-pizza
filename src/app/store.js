import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import paginationReducer from '../features/pagination/paginationSlice';
import categoriesReducer from '../features/categories/categoriesSlice';
import sortReducer from '../features/sort/sortSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pagination: paginationReducer,
    categories: categoriesReducer,
    sort: sortReducer,
  },
});
