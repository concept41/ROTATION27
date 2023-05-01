import { AppDispatch } from "../reduxStorage";
import { removePlayerAction } from "../actions/removePlayerAction";
import { rosterRemovePlayerAction } from "../actions/rosterRemovePlayerAction";
import { PlayerId } from "components/types/PlayerTypes";

export interface RemovePlayerCompositeActionPayload {
  id: PlayerId;
}

export const removePlayerCompositeAction = (dispatch: AppDispatch, payload: RemovePlayerCompositeActionPayload) => {
  // update players
  dispatch(removePlayerAction({ id: payload.id }));
  // update roster
  dispatch(rosterRemovePlayerAction({ id: payload.id }));
}
