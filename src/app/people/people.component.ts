import { Component, OnInit } from '@angular/core';
import { SwapiDataService } from '../core/services/swapidata.service';
import { IPeople, ISWAPIResult } from '../shared/interfaces';


@Component({
  selector: 'swf-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  _people: IPeople[];
  totalRecords = 0;
  nextPage  = '';
  displayedColumns: string[] = ['name', 'height', 'mass', 'hair_color', 'skin_color',
  'eye_color', 'birth_year', 'gender', 'homeworld', 'films',
  'species', 'vehicles', 'starships', 'created', 'edited', 'url'];

  constructor(private swapiData: SwapiDataService) {  }

  ngOnInit() {
    this.getPeople(1);
  }

  getPeople(page: number) {
    this.swapiData.getPersonPage(page)
    .subscribe((response: ISWAPIResult<IPeople[]>) => {
      this._people = response.results;
      this.totalRecords = response.count;
      this.nextPage = response.next;
    });
  }

}
