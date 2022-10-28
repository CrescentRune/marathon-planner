import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, switchMap, withLatestFrom } from "rxjs";

import * as fromApp from 'src/app/store/app.reducer';
import * as MarathonActions from './marathon.actions';

import { Marathon } from "./marathon.interface";
import { environment } from "src/environments/environment";

@Injectable()
export class MarathonEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) {}

  fetchMarathons = createEffect(() =>
    this.actions$.pipe(
      ofType(MarathonActions.fetchMarathons),
      switchMap(() => {
        return this.http.get<Marathon[]>(`${environment.apiURL}/marathons`);
      }),
      map((marathons) => MarathonActions.setMarathons({marathons}))
    )
  )

  storeMarathons = createEffect(() =>
    this.actions$.pipe(
      ofType(MarathonActions.storeMarathons),
      withLatestFrom(this.store.select('marathon')),
      switchMap(([_, marathonsState]) =>
        this.http.put(
          `${environment.apiURL}/marathons`,
          marathonsState
        )
      )
    ),
    { dispatch: false }
  )
}
