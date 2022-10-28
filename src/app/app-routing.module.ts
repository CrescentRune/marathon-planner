import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarathonsComponent } from './components/marathons/marathons.component';

const routes: Routes = [
  {
    path: 'marathons',
    pathMatch: 'full',
    component: MarathonsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
