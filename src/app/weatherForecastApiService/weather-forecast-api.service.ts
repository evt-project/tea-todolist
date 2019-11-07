import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherForecastApiService {
    constructor(private http: HttpClient) { }

    public getItalyWeatherData(cityName: string) {
        const s = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + ',it&appid=d5754a8efdf1ead276cffa4f8250f1e1';

        return this.http.get(s);
    }
}
