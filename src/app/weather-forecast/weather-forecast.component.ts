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
    weather: WeatherFeature;
    subscription: Subscription;

    constructor(public weatherData: WeatherForecastApiService) {

        this.subscription = this.weatherData.getWeatherData(this.city, this.state).subscribe((response) => {
            const ks: string[] = Object.keys(response);
            const subKeys: string[] = ['temp', 'pressure'];
            const compCityName = `${response[ks[12]]} weather forecast`;
            const compDegrees = `${ (response[ks[3]][subKeys[0]] - 273.15).toFixed() }°`;
            const compPressure = `Pressure ${response[ks[3]][subKeys[1]]} torr.`;
            const compSky = `${(response[ks[1]][0][ks[3]])} `;

            // execution of the interface weatherFeature
            this.weather = {
                cityName: compCityName,
                degrees: compDegrees,
                pressure: compPressure,
                sky: compSky,
            };
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
