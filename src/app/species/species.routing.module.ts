import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpeciesComponent } from './species.component';
import { SpeciesDataTableComponent } from './species-data-table.component';

const routes: Routes = [
  { path: '', component: SpeciesComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class SpeciesRoutingModule {
  static components = [ SpeciesComponent, SpeciesDataTableComponent];
}
