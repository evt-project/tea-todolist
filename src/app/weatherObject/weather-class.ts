import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WeatherForecastApiService } from '../weatherForecastApiService/weather-forecast-api.service';

@Injectable({
    providedIn: 'root',
})
export class WeatherClass {

    public weatherFeature = new BehaviorSubject<WeatherFeature>(undefined);

    constructor(
        private wfas: WeatherForecastApiService,
    ) {
        this.retriver();
    }

    // ready to be updated
    private retriver() {
        this.wfas.getItalyWeatherData('Pisa').subscribe((response) => {
            const ks: string[] = ['name', 'main', 'temp', 'pressure', 'weather'];
            this.weatherFeature.next({
                cityName: response[ks[0]],
                degrees: Number((response[ks[1]][ks[2]] - 273.15).toFixed()),
                pressure: Number(response[ks[1]][ks[3]]),
                sky: response[ks[4]][0][ks[1]]
            });
        });
    }
}
