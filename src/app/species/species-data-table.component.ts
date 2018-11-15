import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { SpeciesDataTableDataSource } from './species-data-table-datasource';

import { SwapiDataService } from '../core/services/swapidata.service';

@Component({
  selector: 'swf-species-data-table',
  templateUrl: './species-data-table.component.html',
  styleUrls: ['./species-data-table.component.css'],
})
export class SpeciesDataTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: SpeciesDataTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor(private swapiData: SwapiDataService) {  }

  ngOnInit() {
    this.dataSource = new SpeciesDataTableDataSource(this.paginator, this.sort, this.swapiData);
  }
}
