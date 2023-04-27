import { createReducer } from "@reduxjs/toolkit";
import { PlayerId, PlayerState } from "components/types/PlayerTypes";
import { addPlayerAction } from "../actions/addPlayerAction";
import { modifyPlayerAction } from "../actions/modifyPlayerAction";
import { removePlayerAction } from "../actions/removePlayerAction";

export type PlayersState = Record<PlayerId, PlayerState>;

export const initialPlayersState: PlayersState = {};

export const playersReducer = createReducer(initialPlayersState, (builder) => {
  builder.addCase(removePlayerAction, (state, action) => {
    console.log('received removePlayerAction', () => {});
  });

  builder.addCase(modifyPlayerAction, (state, action) => {});

  builder.addCase(addPlayerAction, (state, action) => {});

});
