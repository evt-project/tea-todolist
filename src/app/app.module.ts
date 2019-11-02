import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AddItemComponent } from './add-item/add-item.component';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ViewItemComponent } from './view-item/view-item.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';

@NgModule({
  declarations: [
    AddItemComponent,
    AppComponent,
    ListComponent,
    ViewItemComponent,
    WeatherForecastComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
