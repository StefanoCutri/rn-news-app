import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Article, NewsAPI } from '../interfaces'

export interface NewsSlice {
  news: Article[]
}

const initialState: NewsSlice = {
  news: [],
}

export const newsSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    getNews: (state, action: PayloadAction<Article[]>)=> {
      state.news = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { getNews } = newsSlice.actions

export default newsSlice.reducer