import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Article, } from '../interfaces'

export interface NewsSlice {
  news: Article[];
  filteredNews: Article[];
}

const initialState: NewsSlice = {
  news: [],
  filteredNews: []
}

export const newsSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    getNews: (state, action: PayloadAction<Article[]>)=> {
      state.news = action.payload
      state.filteredNews = action.payload
    },
    setSearchResults: (state, action: PayloadAction<Article[]>)=> {
      state.filteredNews = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { getNews, setSearchResults } = newsSlice.actions

export default newsSlice.reducer