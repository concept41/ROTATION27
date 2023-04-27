import { createAction } from "@reduxjs/toolkit";
import { PlayerId, PLAYER_ACTIONS } from "components/types/PlayerTypes";

export interface RemovePlayerPayload {
  id: PlayerId;
}
export const removePlayerAction = createAction<RemovePlayerPayload>(PLAYER_ACTIONS.REMOVE_PLAYER);

