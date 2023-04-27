import { createReducer } from '@reduxjs/toolkit';
import { PlayerId } from 'components/types/PlayerTypes';
import { addPlayerAction } from '../actions/addPlayerAction';
import { modifyPlayerAction } from '../actions/modifyPlayerAction';
import { removePlayerAction } from '../actions/removePlayerAction';


interface RosterState {
  players: PlayerId[];
}

const initialRosterState: RosterState = {
  players: [],
};

export const rosterReducer = createReducer(initialRosterState, (builder) => {
  builder.addCase(removePlayerAction, (state, action) => {});

  builder.addCase(modifyPlayerAction, (state, action) => {});

  builder.addCase(addPlayerAction, (state, action) => {});
});
