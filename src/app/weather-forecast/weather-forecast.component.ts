// import { DOCUMENT } from '@angular/common';
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
                // this.weather = weatherFeature
                // weatherFeature
                // const weatherSpace = document.getElementsByClassName('weatherForecastSpace');
                // const weatherComponents = document.createElement('div');
                /*
                Object.entries(weatherFeature).forEach(
                    ([key, value]) => {
                        let node = ((key == 'cityName') ? document.createElement('h3') : document.createElement('h2'));
                        let textNode = document.createTextNode(value); 
                        node.appendChild(textNode); 
                        weatherComponents.appendChild(node);
                        console.log('che sta succedendo qui?')
                    },
                ); */
                // this.renderer.appendChild(weatherSpace, weatherComponents);
                this.weather = weatherFeature;
            },
        );
    }
}
