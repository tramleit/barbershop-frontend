import {configureStore} from '@reduxjs/toolkit';
import {useDispatch, useSelector} from 'react-redux';
import type {TypedUseSelectorHook} from 'react-redux';
import servicesSlice from './features/servicesSlice';
import layoutSlice from './features/layoutSlice';
import turnsSlice from './features/turnsSlice';
import authSlice from './features/authSlice';
import {authApi} from '../api/authApi';
import { servicesApi } from '../api/servicesApi';
import { turnsApi } from '../api/turnsApi';

export const store = configureStore({
  reducer: {
    services: servicesSlice,
    layout: layoutSlice,
    turns: turnsSlice,
    auth: authSlice,
    [authApi.reducerPath]: authApi.reducer,
    [servicesApi.reducerPath]: servicesApi.reducer,
    [turnsApi.reducerPath]: turnsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([authApi.middleware, servicesApi.middleware, turnsApi.middleware]),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
