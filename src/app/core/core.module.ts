import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule, HttpErrorResponse } from '@angular/common/http';

import {SwapiDataService} from './services/swapidata.service';

@NgModule({
  imports: [ HttpClientModule ],
  exports: [ HttpClientModule ],
  declarations: [],
  providers: [SwapiDataService]
})
export class CoreModule { }
