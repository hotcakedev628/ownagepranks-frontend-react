import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { appConfig } from '../config';

const initialState = {
  ideas: null,
  paging: null,
  query: '',
  isLoading: false
};

const slice = createSlice({
  name: 'ideas',
  initialState,
  reducers: {
    getIdeas(state, action) {
      const { ideas, paging } = action.payload;

      state.ideas = ideas;
      state.paging = paging;
    },
    setQuery(state, action) {
      state.query = action.payload;
    },
    startLoading(state) {
      state.isLoading = true;
    },
    endLoading(state) {
      state.isLoading = false;
    }
  }
});

export const reducer = slice.reducer;

export const getIdeas = (page, pathname, query = '') => async (dispatch) => {
  const response = await axios.get(`${appConfig.backendUrl}/app-prank-scripts/ideas${pathname}`, {
    params: {
      q: query,
      limit: 20,
      page
    }
  });

  dispatch(slice.actions.getIdeas(response.data));
};

export const setQuery = (query) => (dispatch) => {
  dispatch(slice.actions.setQuery(query));
};

export const startLoading = () => (dispatch) => {
  dispatch(slice.actions.startLoading());
};

export const endLoading = () => (dispatch) => {
  dispatch(slice.actions.endLoading());
};

export default slice;
