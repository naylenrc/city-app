import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CitiesComponent } from './cities/cities.component';
import { CityComponent } from './city/city.component';


const routes: Routes = [
  { path: '', redirectTo: '/cities', pathMatch: 'full' },
  {
    path: 'cities', component: CitiesComponent
  },
  { path: 'cities/new', component: CityComponent },
  { path: 'cities/:id', component: CityComponent }


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
