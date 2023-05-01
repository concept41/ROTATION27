import { AppDispatch } from "../reduxStorage";
import { v4 as uuid } from 'uuid';
import { addPlayerAction } from "../actions/addPlayerAction";
import { rosterAddPlayerAction } from "../actions/rosterAddPlayerAction";
import { VOLLEYBALL_PLAYER_ABBREVIATED_POSITIONS } from "components/types/VOLLEYBALL_PLAYER_POSITIONS.enum";

export interface AddPlayerCompositeActionPayload {
  name: string;
  position: VOLLEYBALL_PLAYER_ABBREVIATED_POSITIONS[];
  // active: boolean;
}

export const addPlayerCompositeAction = (dispatch: AppDispatch, payload: AddPlayerCompositeActionPayload) => {
  const id = uuid();
  
  // update players
  dispatch(addPlayerAction({
    id,
    ...payload,
  }));
  // update roster
  dispatch(rosterAddPlayerAction({
    id,
  }));
}
