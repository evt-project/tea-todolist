import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { WeatherAPIModel } from 'src/app/model';

@Injectable({
    providedIn: 'root',
})
export class WeatherForecastApiService {
    constructor(
            private http: HttpClient,
    ) { }

    public getWeatherData(cityName: string, stateAcronym: string) {
        const s = `https://api.openweathermap.org/data/2.5/weather?q=
                   ${cityName}
                   ,
                   ${stateAcronym}
                   &appid=d5754a8efdf1ead276cffa4f8250f1e1`;

        return this.http.get<WeatherAPIModel>(s).pipe(
            map((x) => (
                {
                    cityName: `${x.name} weather forecast`,
                    degrees: `${(x.main.temp - 273.15).toFixed()}°`,
                    pressure: `Pressure ${x.main.pressure} torr.`,
                    sky: `${x.weather[0].main}`,
                }
            )),
        );
    }
}
