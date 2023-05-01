import { createAction } from "@reduxjs/toolkit";
import { ROSTER_ACTIONS } from "components/types/ActionTypes";


export interface RosterAddPlayerPlayload {
  id: string;
}

export const rosterAddPlayerAction = createAction<RosterAddPlayerPlayload>(ROSTER_ACTIONS.ADD_PLAYER);
