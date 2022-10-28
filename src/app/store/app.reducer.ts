import { ActionReducerMap } from "@ngrx/store";

import * as fromMarathon from "../components/marathons/store/marathon.reducer";

export interface AppState {
  marathon: fromMarathon.State
}

export const appReducer: ActionReducerMap<AppState> = {
  marathon: fromMarathon.marathonReducer
}
