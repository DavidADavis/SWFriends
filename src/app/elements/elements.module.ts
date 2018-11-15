import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementsRoutingModule } from './elements-routing.module';
import { MatTableModule } from '@angular/material/table';
import { SliderModule } from 'primeng/slider';
import { ButtonModule} from 'primeng/button';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [ ElementsRoutingModule,
     CommonModule,
      MatTableModule,
      FormsModule,
    SliderModule,
    ButtonModule
  ],
  declarations: [ElementsRoutingModule.components]
})
export class ElementsModule { }
