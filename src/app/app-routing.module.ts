import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PeopleComponent} from './people/people.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/people' },
  { path: 'people', loadChildren: '../app/people/people.module#PeopleModule' },
  { path: '**', pathMatch: 'full', redirectTo: '/people' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
