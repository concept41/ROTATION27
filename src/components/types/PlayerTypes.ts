import { VOLLEYBALL_PLAYER_POSITIONS } from "./VOLLEYBALL_PLAYER_POSITIONS.enum";

export type PlayerId = string;

export interface PlayerState {
  id: PlayerId;
  name: string;
  position: VOLLEYBALL_PLAYER_POSITIONS;
  active: boolean;
}

export enum PLAYER_ACTIONS {
  REMOVE_PLAYER = 'REMOVE_PLAYER',
  ADD_PLAYER = 'ADD_PLAYER',
  MODIFY_PLAYER = 'MODIFY_PLAYER',
}
