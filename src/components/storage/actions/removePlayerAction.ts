import { createAction } from "@reduxjs/toolkit";
import { PlayerId } from "components/types/PlayerTypes";
import { PLAYER_ACTIONS } from "components/types/ActionTypes";

export interface RemovePlayerPayload {
  id: PlayerId;
}
export const removePlayerAction = createAction<RemovePlayerPayload>(PLAYER_ACTIONS.REMOVE_PLAYER);
