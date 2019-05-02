import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError, tap, first } from 'rxjs/operators';
import { City } from './city.model';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private cities: City[] = [
    {
      "id": 2,
      "name": "Antwerp",
      "description": "The one with the cathedral that was never really finished.",
      "numberOfPointsOfInterest": 0,
      "pointsOfInterest": []
    },
    {
      "id": 1,
      "name": "New York City",
      "description": "The one with that big park.",
      "numberOfPointsOfInterest": 0,
      "pointsOfInterest": []
    },
    {
      "id": 3,
      "name": "Paris",
      "description": "The one with that big tower.",
      "numberOfPointsOfInterest": 0,
      "pointsOfInterest": []
    }
  ];
  private editCity: City;
  private url = 'https://cityinfoapi20190423043800.azurewebsites.net/api/cities';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT',
      'Access-Control-Allow-Headers': 'Content-Type'
    })
  };



  constructor(private http: HttpClient) { }

  storeCities(cities: any[]) {
    return this.http.post(this.url, this.getCities());
  }

  getCities(): Observable<City[]> {
    return this.http.get<City[]>(this.url);
  }

  getCity(id: number): Observable<City> {
    var x = this.http.get<City>(this.url + '/' + id, this.httpOptions).pipe(first(item => item.id === id));
    return x;
  }

  editedCities(selectedId: number) {
    this.editCity = this.cities.find(ex => selectedId === ex.id);
  }

}
