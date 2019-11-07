import { Component } from '@angular/core';
import { WeatherClass } from '../weatherObject/weather-class';

@Component({
    selector: 'app-weather-forecast',
    templateUrl: './weather-forecast.component.html',
    styleUrls: ['./weather-forecast.component.scss'],
})
export class WeatherForecastComponent  {
    public weather: WeatherFeature;
    constructor(
        private weatherClass: WeatherClass,
    ) {
        this.retriveWeatherForecast();
    }

    private retriveWeatherForecast() {
        this.weatherClass.weatherFeature.subscribe(
            (weatherFeature) => {
                this.weather = weatherFeature
                weatherFeature
            },
        );
    }
}
