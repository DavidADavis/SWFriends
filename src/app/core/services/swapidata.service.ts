import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import {IPeople, IPlanets, ISpecies, IVehicles, IStarships, IFilms, ISWAPIResult } from '../../shared/interfaces';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class SwapiDataService {
  swapiBaseUrl = 'https://swapi.co/api';

  // persons = '/people/';
  // planetsAPI = '/planets/';
  // filmsAPI = '/films/';
  // speciesAPI = '/species/';
  // vehiclesAPI = '/vehicles/';
  // starshipsAPI = '/starships/';

  persons: IPeople[];
  planets: IPlanets[];
  films: IFilms[];
  species: ISpecies[];
  vehicles: IVehicles[];
  starships: IStarships[];

  constructor(private http: HttpClient) { }


  getPersonPage(page: number): Observable<ISWAPIResult<IPeople[]>> {
    return this.http.get<ISWAPIResult<IPeople[]>>(
        `${this.swapiBaseUrl}/people/?page=${page}`)
        .pipe(
          map(results => {
            return results;
        }),
            catchError(this.handleError)
        );
  }


  private handleError(error: HttpErrorResponse) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
        const errMessage = error.error.message;
        return Observable.throw(errMessage);
        // Use the following instead if using lite-server
        // return Observable.throw(err.text() || 'backend server error');
    }
    return Observable.throw(error || 'Node.js server error');
  }
}
