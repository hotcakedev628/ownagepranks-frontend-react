import { combineReducers } from '@reduxjs/toolkit';
import { reducer as categoriesReducer } from '../slices/categories';
import { reducer as ideasReducer } from '../slices/ideas';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  ideas: ideasReducer
});

export default rootReducer;
