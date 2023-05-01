import { VOLLEYBALL_PLAYER_ABBREVIATED_POSITIONS } from "./VOLLEYBALL_PLAYER_POSITIONS.enum";

export type PlayerId = string;

export interface PlayerState {
  id: PlayerId;
  name: string;
  position: VOLLEYBALL_PLAYER_ABBREVIATED_POSITIONS[];
  // active: boolean;
}
