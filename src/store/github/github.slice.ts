import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

interface GithubState {
  favorites: string[];
}

const initialState: GithubState = {
  favorites: JSON.parse(localStorage.getItem('ghFavorites') ?? '[]'),
};

const githubSlice = createSlice({
  name: 'githubFav',
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<string>) {
      state.favorites.push(action.payload);
      localStorage.setItem('ghFavorites', JSON.stringify(state.favorites));
    },
    deleteFavorite(state, action: PayloadAction<string>) {
      state.favorites = state.favorites.filter(
        (item) => item !== action.payload
      );
      localStorage.setItem('ghFavorites', JSON.stringify(state.favorites));
    },
  },
});

export const githubSelector = (state: RootState) => state.githubSlice;

const { reducer, actions } = githubSlice;
export const { addFavorite, deleteFavorite } = actions;
export default reducer;
