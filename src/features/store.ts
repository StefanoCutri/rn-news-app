import { configureStore } from '@reduxjs/toolkit'
import newsReducer from './newsSlice'
import favouritesReducer from './favourtiesSlice'

export const store = configureStore({
  reducer: {
    news: newsReducer,
    favourites: favouritesReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch