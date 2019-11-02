import {Component, OnInit} from '@angular/core';
import { WeatherForecastApiService } from './weatherForecastApiService/weather-forecast-api.service';

@Component({
    selector: 'app-weather-forecast',
    templateUrl: './weather-forecast.component.html',
    styleUrls: ['./weather-forecast.component.scss'],
})
export class WeatherForecastComponent implements OnInit {
    response: object;
    constructor(private wfas: WeatherForecastApiService) {}

    ngOnInit() {
        this.retriveWF();
    }
    private retriveWF() {
        this.wfas.getOBS().subscribe((response) => {
            this.response = response;
            // console.log(this.response);
        });
    }
}
