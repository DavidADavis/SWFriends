import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleRoutingModule } from './people-routing.module';
@NgModule({
  imports: [PeopleRoutingModule, CommonModule],
  declarations: [PeopleRoutingModule.components]
})
export class PeopleModule { }
