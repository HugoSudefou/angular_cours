import { Component } from '@angular/core';
import { HttpService } from '../../services/http.service'
import { Observable, of } from 'rxjs'
import { OpenWeatherForecastInterface } from '../../schemas/interfaces'

@Component({
  selector: 'app-meteo-page',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss']
})
export class MeteoPage {

  dataForMeteo$: Observable<OpenWeatherForecastInterface | null> = of(null);

  city: string | undefined = undefined;

  constructor (private httpService: HttpService) {
  }

  setCity (city: string) {
    this.city = city;
    this.dataForMeteo$ = this.httpService.getMeteoWithPrevision(city);
  }
}
