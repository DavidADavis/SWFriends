import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarshipsComponent } from './starships.component';
import { StarshipsDataTableComponent } from './starships-data-table.component';

const routes: Routes = [
  { path: '', component: StarshipsComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class StarshipsRoutingModule {
  static components = [ StarshipsComponent, StarshipsDataTableComponent];
}
