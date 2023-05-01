import { createAction } from "@reduxjs/toolkit";
import { ROSTER_ACTIONS } from "components/types/ActionTypes";


export interface RosterMovePlayerPlayload {
  from: number;
  to: number;
}

export const rosterMovePlayerAction = createAction<RosterMovePlayerPlayload>(ROSTER_ACTIONS.MOVE_PLAYER);
