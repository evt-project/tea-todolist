import { AfterViewInit, Component, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { WeatherForecastApiService } from './weatherForecastApiService/weather-forecast-api.service';

@Component({
    selector: 'app-weather-forecast',
    templateUrl: './weather-forecast.component.html',
    styleUrls: ['./weather-forecast.component.scss'],
})

export class WeatherForecastComponent implements AfterViewInit {
    @Input() cityOfWeather = 'Pisa';
    @Input() stateOfWeather = 'it';
    public weatherFeature = new Subject<WeatherFeature>();
    weather: WeatherFeature;

    constructor(public weatherData: WeatherForecastApiService) {
        /* This piece of code won't be eternally here.
        If in the future the weather needs to be updated every so often,
        it should be put into a method / function. */
        this.weatherData.getWeatherData(this.cityOfWeather, this.stateOfWeather).subscribe((response) => {

            const ks: string[] = ['name', 'main', 'temp', 'pressure', 'weather'];

            const compCityName: string = response[ks[0]] + ' weather forecast';
            const compDegrees: string = (response[ks[1]][ks[2]] - 273.15).toFixed() + '°';
            const compPressure: string = 'Pressure ' + response[ks[1]][ks[3]] + ' torr.';
            let compSky: string = response[ks[4]][0][ks[1]];

            // check how the weather sky ends
            if (compSky === 'Clouds') {
                compSky = compSky.slice(0, -1) + 'y';
            } else if (compSky === 'Sun') {
                compSky += 'ny';
            } else if (compSky === 'Fog') {
                compSky += 'gy';
            } else {
                compSky += 'y';
            }

            // execution of the interface weatherFeature
            this.weatherFeature.next({
                cityName: compCityName,
                degrees: compDegrees,
                pressure: compPressure,
                sky: compSky,
            });

            return () => {
                // console.log('Unsubscribed from retriving the weather forecast');
            };
        });
    }
    ngAfterViewInit() {
        this.weatherFeature.subscribe(
            (weatherFeature) => {
                this.weather = weatherFeature;

                return () => {
                    // console.log('Unsubscribed from retriving the UI weather forecast');
                };
            },
        );
    }
}
