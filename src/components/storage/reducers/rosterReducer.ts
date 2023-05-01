import { createReducer } from '@reduxjs/toolkit';
import { PlayerId } from 'components/types/PlayerTypes';
import { rosterAddPlayerAction } from '../actions/rosterAddPlayerAction';
import { rosterMovePlayerAction } from '../actions/rosterMovePlayerAction';
import { rosterRemovePlayerAction } from '../actions/rosterRemovePlayerAction';


interface RosterState {
  players: PlayerId[];
}

const initialRosterState: RosterState = {
  players: [],
};

export const rosterReducer = createReducer(initialRosterState, (builder) => {
  builder.addCase(rosterRemovePlayerAction, (state, action) => {
    state.players = state.players.filter((id) => id !== action.payload.id);
  });

  builder.addCase(rosterMovePlayerAction, (state, action) => {
    state.players = removeAndInsert(state.players, action.payload.from, action.payload.to);
  });

  builder.addCase(rosterAddPlayerAction, (state, action) => {
    state.players.push(action.payload.id);
  });
});

const removeAndInsert = (array: any[], from: number, to: number) => {
  const res = [...array];
  const element = res[from];
  res.splice(from, 1);
  res.splice(to, 0, element);

  return res;
};
