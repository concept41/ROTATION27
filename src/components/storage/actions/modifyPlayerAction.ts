import { createAction } from "@reduxjs/toolkit";
import { PLAYER_ACTIONS } from "components/types/ActionTypes";
import { PlayerId } from "components/types/PlayerTypes";
import { VOLLEYBALL_PLAYER_ABBREVIATED_POSITIONS } from "components/types/VOLLEYBALL_PLAYER_POSITIONS.enum";


export interface ModifyPlayerPayload {
  id: PlayerId;
  name: string;
  position: VOLLEYBALL_PLAYER_ABBREVIATED_POSITIONS[];
  // active: boolean;
}

export const modifyPlayerAction = createAction<ModifyPlayerPayload>(PLAYER_ACTIONS.MODIFY_PLAYER);
