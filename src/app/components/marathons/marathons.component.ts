import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';

import * as fromApp from 'src/app/store/app.reducer';

import { Marathon } from './store/marathon.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-marathons',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './marathons.component.html',
  styleUrls: ['./marathons.component.css']
})
export class MarathonsComponent implements OnInit {

  marathons$: Observable<Marathon[]> = this.store.select('marathon').pipe(map((state) => state.marathons));

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
  }

}
