import { combineReducers } from '@reduxjs/toolkit';
import { reducer as categoriesReducer } from '../slices/categories';

const rootReducer = combineReducers({
  categories: categoriesReducer
});

export default rootReducer;
