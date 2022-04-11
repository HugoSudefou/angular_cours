import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service'
import { Observable, of } from 'rxjs'
import { OpenWeatherListInterface } from '../../schemas/interfaces'

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomePage implements OnInit {

  dataForMeteoNow$: Observable<OpenWeatherListInterface | null> = of(null);

  constructor (private httpService: HttpService) {
  }

  ngOnInit (): void {
    navigator.geolocation.getCurrentPosition((d) => {
      this.dataForMeteoNow$ = this.httpService.getMeteoNow(d.coords.latitude, d.coords.longitude);
    }, () => {
      alert('User not allowed')
    }, { timeout: 10000 })
  }
}
