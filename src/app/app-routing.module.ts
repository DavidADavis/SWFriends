import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/people' },
  { path: 'people', loadChildren: '../app/people/people.module#PeopleModule' },
  { path: 'demo', loadChildren: '../app/elements/elements.module#ElementsModule' },
  { path: '**', pathMatch: 'full', redirectTo: '/people' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
