import { configureStore } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { playersReducer } from './reducers/playersReducer';
import { rosterReducer } from './reducers/rosterReducer';


const saveToLocalStorage = (state: RootState) => {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("persistantState", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

const loadFromLocalStorage = () => {
  try {
    const serialisedState = localStorage.getItem("persistantState");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

export const reduxStorage = configureStore({
  reducer: {
    roster: rosterReducer,
    players: playersReducer,
  },
  preloadedState: loadFromLocalStorage(),
});

reduxStorage.subscribe(() => saveToLocalStorage(reduxStorage.getState()));

export type RootState = ReturnType<typeof reduxStorage.getState>
export type AppDispatch = typeof reduxStorage.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
