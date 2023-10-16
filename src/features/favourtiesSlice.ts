import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {Article} from '../interfaces';

export interface FavouritesSlice {
  favourites: Article[];
}

const initialState: FavouritesSlice = {
  favourites: [],
};

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    toggleFavourite: (state, action: PayloadAction<Article>) => {
      const articleIndex = state.favourites.findIndex(
        article => article.source.name === action.payload.source.name,
      );

      if (articleIndex !== -1) {
        // Article is already in favorites, remove it
        state.favourites.splice(articleIndex, 1);
      } else {
        // Article is not in favorites, add it
        state.favourites.push(action.payload);
      }
    },
  },
});

export const {toggleFavourite} = favouritesSlice.actions;

export default favouritesSlice.reducer;
