import { createAction, props } from "@ngrx/store"
import { Marathon } from "./marathon.interface"


export const addMarathon = createAction(
  '[Marathon] Add Marathon',
  props<{
    marathon: Marathon
  }>()
);

export const deleteMarathon = createAction(
  '[Marathon] Add Marathon',
  props<{
    index: number
  }>()
);

export const setMarathons = createAction(
  '[Marathon] Set Marathon',
  props<{
    marathons: Marathon[]
  }>()
);

export const updateMarathon = createAction(
  '[Marathon] Update Marathon',
  props<{
    index: number,
    marathon: Marathon
  }>()
);

export const fetchMarathons = createAction(
  '[Marathon] Fetch Marathons'
);

export const storeMarathons = createAction(
  '[Marathon] Store Marathons'
);
