import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs'
import { CommuneApiInterface, OpenWeatherForecastInterface, OpenWeatherListInterface } from '../schemas/interfaces'
import { ToastsService } from './toasts.service'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor (private http: HttpClient, private toastService: ToastsService) {
  }

  getAllCity (): Observable<CommuneApiInterface[]> {
    return this.http.get<CommuneApiInterface[]>('https://geo.api.gouv.fr/communes').pipe(
      map((value) => this.handleSucces('getAllCity', value)),
      catchError((err) => {
        return this.handleError('getAllCity', err)
      })
    );
  }

  getMeteoNow (lat: number, long: number): Observable<OpenWeatherListInterface> {
    return this.http.get<OpenWeatherListInterface>(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=3dfd67983e09a9d2946d61a0cff4a325&lang=fr`).pipe(
      map((value) => this.handleSucces('getMeteoNow', value)),
      catchError((err) => {
        return this.handleError('getMeteoNow', err)
      })
    );
  }

  getMeteoWithPrevision (city: string): Observable<OpenWeatherForecastInterface> {
    return this.http.get<OpenWeatherForecastInterface>(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=3dfd67983e09a9d2946d61a0cff4a325&lang=fr`).pipe(
      map((value) => this.handleSucces('getMeteoWithPrevision', value)),
      catchError((err) => {
        return this.handleError('getMeteoWithPrevision', err)
      })
    );
  }

  handleError (type: string, error: any) {
    this.toastService.show(type, { classname: 'bg-danger text-light', delay: 15000 });
    return throwError(error)
  }

  handleSucces (type: string, data: any): any {
    this.toastService.show(type, { classname: 'bg-success text-light', delay: 10000 });
    return data;
  }
}
