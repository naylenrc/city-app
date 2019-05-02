import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CityService } from './city.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { City } from './city.model';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css'],
  providers: [CityService]
})
export class CitiesComponent implements OnInit, AfterViewInit {
  displayedColumns = ['name', 'description', 'numberOfPointsOfInterest', 'pointsOfInterest', 'actions'];
  dataSource = new MatTableDataSource<City>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  //cities: Observable<City>;
  cities = new Array<City>();

  constructor(private cityService: CityService) {

  }

  ngOnInit() {
    this.cityService.getCities().subscribe(response => {
      this.cities = response.map(item => {
        this.dataSource.data = response;
        return new City(item.id, item.name, item.description, item.numberOfPointsOfInterest, item.pointsOfInterest);
      })
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  onSave() {
    this.cityService.storeCities(this.cities).subscribe(
      (response) => console.log(response),
      (error) => console.log(error));
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
