import { Component } from '@angular/core';
@Component({
  selector: 'swf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Friends of SWAPI';
  panelOpenState = true;
  val: number;
  step: number;
  min: number;
  max: number;
  navLinks: INavigationLinks[] =  [
    {path: 'people', label: 'People'},
    {path: 'demo', label: 'Elements'}
  ];
  constructor() {
    this.navLinks = [
      {path: 'people', label: 'People'},
      {path: 'demo', label: 'Elements'}
    ];
  }
}

export interface INavigationLinks {
  path: string;
  label: string;
}
