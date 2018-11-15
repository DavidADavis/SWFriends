import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

import { SwapiDataService } from '../core/services/swapidata.service';
import { IStarships, ISWAPIResult } from '../shared/interfaces';

// TODO: Replace this with your own data model type
/**
 * Data source for the StarshipsDataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class StarshipsDataTableDataSource extends DataSource<IStarships> {
  data: IStarships[] = null;
  count = 1;
  next: string;

  constructor(private paginator: MatPaginator, private sort: MatSort, private swapiData: SwapiDataService) {
    super();
    this.getStarShipPage(1);
  }

  getStarShipPage(page: number) {
    this.swapiData.getStarshipsPage(page)
    .subscribe((response: ISWAPIResult<IStarships[]>) => {
      this.data  = response.results;
      this.count = Math.round( response.count / 10 );
      this.next = response.next; // .substring(response.next.lastIndexOf('='));
    });
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<IStarships[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
     this.paginator.page,
     this.sort.sortChange
    ];

    // Set the paginator's length
    this.paginator.length = this.data.length;

    this.paginator.length = this.count;
    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: IStarships[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: IStarships[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
