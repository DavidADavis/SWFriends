import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementsRoutingModule } from './elements-routing.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [ ElementsRoutingModule, CommonModule, MatTableModule],
  declarations: [ElementsRoutingModule.components]
})
export class ElementsModule { }
