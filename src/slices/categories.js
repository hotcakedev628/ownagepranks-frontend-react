import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { appConfig } from '../config';

const initialState = {
  categories: [],
  paging: [],
  isLoading: false,
  isModalOpen: false,
  selectedCategory: null
};

const slice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    getCategories(state, action) {
      const { categories } = action.payload;

      state.categories = categories;
    },
    getPaging(state, action) {
      const { paging } = action.payload;

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

export const getCategories = () => async (dispatch) => {
  const response = await axios.get(`${appConfig.backendUrl}/prank/categories`);

  dispatch(slice.actions.getCategories(response.data));
  dispatch(slice.actions.getPaging(response.data));
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
