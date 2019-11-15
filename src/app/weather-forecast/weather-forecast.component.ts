import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { WeatherFeature } from '../model';
import { WeatherForecastApiService } from './weatherForecastApiService/weather-forecast-api.service';

@Component({
    selector: 'app-weather-forecast',
    templateUrl: './weather-forecast.component.html',
    styleUrls: ['./weather-forecast.component.scss'],
})

export class WeatherForecastComponent implements OnDestroy {
    @Input() city = 'Pisa';
    @Input() state = 'it';
    subscription: Subscription;
    weather: WeatherFeature;

    constructor(
            public weatherData: WeatherForecastApiService,
    ) {
        this.subscription = this.weatherData.getWeatherData(this.city, this.state).subscribe((response) => {
            this.weather = response;
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
