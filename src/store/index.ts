import {configureStore} from '@reduxjs/toolkit';
import {useDispatch, useSelector} from 'react-redux';
import type {TypedUseSelectorHook} from 'react-redux';
import servicesSlice from './features/servicesSlice';
import layoutSlice from './features/layoutSlice';
import turnsSlice from './features/turnsSlice';
import authSlice from './features/authSlice';

export const store = configureStore({
  reducer: {
    services: servicesSlice,
    layout: layoutSlice,
    turns: turnsSlice,
    auth: authSlice
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
