import { TestBed } from '@angular/core/testing';

import { WeatherForecastApiService } from './weather-forecast-api.service';

describe('WeatherForecastApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherForecastApiService = TestBed.get(WeatherForecastApiService);
    expect(service).toBeTruthy();
  });
});
