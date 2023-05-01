import { configureStore } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { playersReducer } from './reducers/playersReducer';
import { rosterReducer } from './reducers/rosterReducer';


export const reduxStorage = configureStore({
  reducer: {
    roster: rosterReducer,
    players: playersReducer,
  }
});

export type RootState = ReturnType<typeof reduxStorage.getState>
export type AppDispatch = typeof reduxStorage.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
