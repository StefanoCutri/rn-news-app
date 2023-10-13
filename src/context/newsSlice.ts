import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { NewsAPI } from '../interfaces'

export interface NewsSlice {
  news: NewsAPI
}

const initialState: NewsSlice = {
  news: {
    articles: [],
    status: '',
    totalResults: 0
  },
}

export const newsSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    getNews: (state, action: PayloadAction<NewsAPI>)=> {
      state.news = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { getNews } = newsSlice.actions

export default newsSlice.reducer