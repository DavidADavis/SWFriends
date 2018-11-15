import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { StarshipsDataTableDataSource } from './starships-data-table-datasource';
import {PageEvent} from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';

import { SwapiDataService } from '../core/services/swapidata.service';

@Component({
  selector: 'swf-starships-data-table',
  templateUrl: './starships-data-table.component.html',
  styleUrls: ['./starships-data-table.component.css'],
})
export class StarshipsDataTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: StarshipsDataTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  starShipsDisplayedColumns = ['name', 'model', 'manufacturer',
  'cost_in_credits', 'length', 'max_atmosphering_speed', 'crew',
  'passengers', 'cargo_capacity', 'consumables', 'hyperdrive_rating',
  'MGLT', 'starship_class', 'pilots', 'films', 'created', 'edited', 'url'];

  constructor(private swapiData: SwapiDataService) {  }

  ngOnInit() {
    this.dataSource = new StarshipsDataTableDataSource(this.paginator, this.sort, this.swapiData);

  }
}
