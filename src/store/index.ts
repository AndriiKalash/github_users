import { configureStore } from '@reduxjs/toolkit';
import { githubApi } from './github/github.api';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import githubSlice from './github/github.slice';

export const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer,
    githubSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(githubApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
