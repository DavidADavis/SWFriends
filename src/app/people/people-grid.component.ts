import { Component, Input, OnInit } from '@angular/core';
import { IPeople } from '../shared/interfaces';

@Component({
  selector: 'swf-people-grid',
  templateUrl: './people-grid.component.html',
  styleUrls: ['./people-grid.component.css']
})
export class PeopleGridComponent implements OnInit {
  @Input() people: IPeople[] = [];

  constructor() { }

  ngOnInit() {
  }

}
