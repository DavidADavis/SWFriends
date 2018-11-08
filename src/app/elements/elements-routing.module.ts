import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ElementsComponent } from './elements.component';
import { ElementsTableBasicComponent } from './elements-table-basic';

const routes: Routes = [
  { path: '', component: ElementsComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ElementsRoutingModule {
  static components = [ ElementsComponent, ElementsTableBasicComponent];
}
