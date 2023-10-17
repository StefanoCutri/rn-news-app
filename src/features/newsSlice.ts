import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {Article} from '../interfaces';

export interface NewsSlice {
  news: Article[];
  filteredNews: Article[];
  isLoading: boolean;
}

const initialState: NewsSlice = {
  news: [],
  filteredNews: [],
  isLoading: true,
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    getNews: (state, action: PayloadAction<Article[]>) => {
      state.news = action.payload;
      state.filteredNews = action.payload;
      state.isLoading = false;
    },
    setSearchResults: (state, action: PayloadAction<Article[]>) => {
      state.filteredNews = action.payload;
      state.isLoading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {getNews, setSearchResults} = newsSlice.actions;

export default newsSlice.reducer;
