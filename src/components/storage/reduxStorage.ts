import { configureStore } from '@reduxjs/toolkit';
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
