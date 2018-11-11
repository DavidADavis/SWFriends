import { NgModule } from '@angular/core';

import { MatNativeDateModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { DemoMaterialModule } from '../material-module';

import { SliderModule } from 'primeng/slider';
import { ButtonModule } from 'primeng/button';

import { CoreModule } from './core/core.module';
import { SWFSharedModule } from './shared/shared.module';
import { StarshipsComponent } from './starships/starships.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    MatNativeDateModule,
    MatTabsModule,
    MatDividerModule,
    AppRoutingModule,
    CoreModule,
    FormsModule,
    SWFSharedModule,
    ButtonModule,
    SliderModule
  ],
  declarations: [AppComponent, StarshipsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

