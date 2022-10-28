import { Action, createReducer, on } from "@ngrx/store";

import { marathons } from "./marathon-test.const";
import { Marathon } from "./marathon.interface";
import * as MarathonActions from "./marathon.actions";
// export const SET_MARATHONS = '[Marathons] Set Marathons';
// export const FETCH_MARATHONS = '[Marathons] Fetch Marathons';
// export const ADD_MARATHON = '[Marathons] Add Marathons';
// export const UPDATE_MARATHON = '[Marathons] Update Marathon';
// export const DELETE_MARATHON =  '[Marathons] Delete Marathon';
// export const STORE_MARATHONS = '[Marathons] Store Marathon';


export interface State {
  marathons: Marathon[];
}

export const initialState: State = {
  marathons: marathons
}

export const _marathonReducer = createReducer(
  initialState,
  on(
    MarathonActions.addMarathon,
    (state, action) => ({
      ...state,
      marathons: state.marathons.concat({...action.marathon})
    })
  ),
  on(
    MarathonActions.deleteMarathon,
    (state, action) => ({
      ...state,
      marathons: state.marathons.filter((_, index) => index !== action.index)
    })
  ),
  on(
    MarathonActions.setMarathons,
    (state, action) => ({
      ...state,
      marathons: [...action.marathons]
    })
  ),
  on(
    MarathonActions.updateMarathon,
    (state, action) => ({
      ...state,
      marathons: state.marathons.map(
        (marathon, index) => index === action.index ? { ...action.marathon } : marathon
      )
    })
  )
);

export function marathonReducer(state: State|undefined, action: Action) {
  return _marathonReducer(state, action);
}
