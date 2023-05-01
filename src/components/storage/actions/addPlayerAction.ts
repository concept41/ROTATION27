import { createAction } from "@reduxjs/toolkit";
import { PLAYER_ACTIONS } from "components/types/ActionTypes";
import { AddPlayerCompositeActionPayload } from "../compositeActions/addPlayerCompositeAction";


export interface AddPlayerPayload extends AddPlayerCompositeActionPayload {
  id: string;
}

export const addPlayerAction = createAction<AddPlayerPayload>(PLAYER_ACTIONS.ADD_PLAYER);
