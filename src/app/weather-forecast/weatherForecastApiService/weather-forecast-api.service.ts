
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherForecastApiService {

    constructor(private http: HttpClient) { }

    private wfApiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Pisa,it&appid=d5754a8efdf1ead276cffa4f8250f1e1';

    public getOBS() {
        return this.http.get(this.wfApiUrl);
    }
}
