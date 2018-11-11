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

  getPerson(personID: number): Observable<ISWAPIResult<IPeople[]>> {
    return this.http.get<ISWAPIResult<IPeople[]>>(
        `${this.swapiBaseUrl}/people/${personID}/`)
        .pipe(
          map(results => {
            return results;
        }),
            catchError(this.handleError)
        );
  }

  getPlanetsPage(page: number): Observable<ISWAPIResult<IPlanets[]>> {
    return this.http.get<ISWAPIResult<IPlanets[]>>(
        `${this.swapiBaseUrl}/planets/?page=${page}`)
        .pipe(
          map(results => {
            return results;
        }),
            catchError(this.handleError)
        );
  }

  getPlanet(planetID: number): Observable<ISWAPIResult<IPlanets[]>> {
    return this.http.get<ISWAPIResult<IPlanets[]>>(
        `${this.swapiBaseUrl}/planets/${planetID}/`)
        .pipe(
          map(results => {
            return results;
        }),
            catchError(this.handleError)
        );
  }

  getFilmsPage(page: number): Observable<ISWAPIResult<IFilms[]>> {
    return this.http.get<ISWAPIResult<IFilms[]>>(
        `${this.swapiBaseUrl}/films/?page=${page}`)
        .pipe(
          map(results => {
            return results;
        }),
            catchError(this.handleError)
        );
  }

  getFilm(filmID: number): Observable<ISWAPIResult<IFilms[]>> {
    return this.http.get<ISWAPIResult<IFilms[]>>(
        `${this.swapiBaseUrl}/films/${filmID}/`)
        .pipe(
          map(results => {
            return results;
        }),
            catchError(this.handleError)
        );
  }

  getSpeciesPage(page: number): Observable<ISWAPIResult<ISpecies[]>> {
    return this.http.get<ISWAPIResult<ISpecies[]>>(
        `${this.swapiBaseUrl}/species/?page=${page}`)
        .pipe(
          map(results => {
            return results;
        }),
            catchError(this.handleError)
        );
  }

  getSpecie(specieID: number): Observable<ISWAPIResult<ISpecies[]>> {
    return this.http.get<ISWAPIResult<ISpecies[]>>(
        `${this.swapiBaseUrl}/species/${specieID}/`)
        .pipe(
          map(results => {
            return results;
        }),
            catchError(this.handleError)
        );
  }

  getVehiclesPage(page: number): Observable<ISWAPIResult<IVehicles[]>> {
    return this.http.get<ISWAPIResult<IVehicles[]>>(
        `${this.swapiBaseUrl}/vehicles/?page=${page}`)
        .pipe(
          map(results => {
            return results;
        }),
            catchError(this.handleError)
        );
  }

  getVehicle(vehicleID: number): Observable<ISWAPIResult<IVehicles[]>> {
    return this.http.get<ISWAPIResult<IVehicles[]>>(
        `${this.swapiBaseUrl}/vehicles/${vehicleID}/`)
        .pipe(
          map(results => {
            return results;
        }),
            catchError(this.handleError)
        );
  }

  getStarshipsPage(page: number): Observable<ISWAPIResult<IStarships[]>> {
    return this.http.get<ISWAPIResult<IStarships[]>>(
        `${this.swapiBaseUrl}/starships/?page=${page}`)
        .pipe(
          map(results => {
            return results;
        }),
            catchError(this.handleError)
        );
  }

  getStarship(vehicleID: number): Observable<ISWAPIResult<IStarships[]>> {
    return this.http.get<ISWAPIResult<IStarships[]>>(
        `${this.swapiBaseUrl}/starships/${vehicleID}/`)
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
