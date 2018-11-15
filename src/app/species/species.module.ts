import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule, MatSortModule } from '@angular/material';
import { SpeciesRoutingModule } from './species.routing.module';

@NgModule({
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    FormsModule,
    SpeciesRoutingModule
  ],
  declarations: [SpeciesRoutingModule.components]
})
export class SpeciesModule { }
