import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface FavouritesSlice {
  favourites: string[];
}

const initialState: FavouritesSlice = {
  favourites: [],
};

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    toggleFavourite: (state, action: PayloadAction<string>) => {

      const articleId = action.payload;
      if (state.favourites.includes(articleId)) {
        state.favourites = state.favourites.filter(id => id !== articleId);
      }

      state.favourites.push(articleId);
    },
  },
});

export const { toggleFavourite } = favouritesSlice.actions

export default favouritesSlice.reducer;
