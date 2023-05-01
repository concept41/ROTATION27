import { createAction } from "@reduxjs/toolkit";
import { PlayerId } from "components/types/PlayerTypes";
import { ROSTER_ACTIONS } from "components/types/ActionTypes";

export interface RosterRemovePlayerPayload {
  id: PlayerId;
}
export const rosterRemovePlayerAction = createAction<RosterRemovePlayerPayload>(ROSTER_ACTIONS.REMOVE_PLAYER);

