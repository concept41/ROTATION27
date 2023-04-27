import { createAction } from "@reduxjs/toolkit";
import { PLAYER_ACTIONS } from "components/types/PlayerTypes";
import { VOLLEYBALL_PLAYER_POSITIONS } from "components/types/VOLLEYBALL_PLAYER_POSITIONS.enum";


export interface AddPlayerPayload {
  name: string;
  position: VOLLEYBALL_PLAYER_POSITIONS;
  active: boolean;
}

export const addPlayerAction = createAction<AddPlayerPayload>(PLAYER_ACTIONS.ADD_PLAYER);
