import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CityService } from '../cities/city.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { City } from '../cities/city.model';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  id: number;
  city: City;

  constructor(private cityService: CityService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    debugger;
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      // this.cityService.getCity(this.id).subscribe(item => {
      //   debugger;
      //   this.city = new City(item.id, item.name, item.description, item.numberOfPointsOfInterest, item.pointsOfInterest);

      // });

      this.cityService.getCity(this.id).pipe(
        map(
          item => {
            debugger;
            this.city = new City(item.id, item.name, item.description, item.numberOfPointsOfInterest, item.pointsOfInterest);
            console.log(this.city);
          }
        )
      ).subscribe();

    });
  }
  /*
  this.router.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      }*/


  onSubmit(form: NgForm) {
    console.log(form);
    let x = [{ name: form.value.name, description: form.value.description }]
    this.cityService.storeCities(x);
  }

}
