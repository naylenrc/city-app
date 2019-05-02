import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TravelComponent } from './travel/travel.component';
import { CitiesComponent } from './cities/cities.component';
import { CityComponent } from './city/city.component';
import { PointOfInterestComponent } from './point-of-interest/point-of-interest.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CityService } from './cities/city.service';
import { AddCityComponent } from './add-city/add-city.component';

@NgModule({
  declarations: [
    AppComponent,
    TravelComponent,
    CitiesComponent,
    CityComponent,
    PointOfInterestComponent,
    AddCityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [CityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
