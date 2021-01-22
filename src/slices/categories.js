import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { appConfig } from '../config';

const initialState = {
  categories: null,
  paging: null,
  isModalOpen: false,
  selectedCategory: null
};

const slice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    getCategories(state, action) {
      const { categories, paging } = action.payload;

      state.categories = categories;
      state.paging = paging;
    },
    startLoading(state) {
      state.isLoading = true;
    },
    endLoading(state) {
      state.isLoading = false;
    },
    openModal(state) {
      state.isModalOpen = true;
    },
    closeModal(state) {
      state.isModalOpen = false;
    }
  }
});

export const reducer = slice.reducer;

export const getCategories = (page) => async (dispatch) => {
  const response = await axios.get(`${appConfig.backendUrl}/app-categories/categories`, {
    params: {
      limit: 5,
      page
    }
  });

  dispatch(slice.actions.getCategories(response.data));
};

export const startLoading = () => (dispatch) => {
  dispatch(slice.actions.startLoading());
};

export const endLoading = () => (dispatch) => {
  dispatch(slice.actions.endLoading());
};

export const openModal = () => (dispatch) => {
  dispatch(slice.actions.openModal());
};

export const closeModal = () => (dispatch) => {
  dispatch(slice.actions.closeModal());
};

export default slice;
