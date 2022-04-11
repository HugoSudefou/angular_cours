import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpService } from 'src/app/services/http.service'
import { debounceTime, distinctUntilChanged, map, Observable, OperatorFunction } from 'rxjs'
import { Router } from '@angular/router'
import { CommuneApiInterface, OpenWeatherForecastInterface } from '../../schemas/interfaces'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {

  formCity: CommuneApiInterface | undefined;
  cities: CommuneApiInterface[] = []
  weathers: OpenWeatherForecastInterface | undefined;
  maxLength: number = 100;

  @Input() class: string = '';

  @Output() setCityEvent = new EventEmitter<string>();

  search: OperatorFunction<string, readonly CommuneApiInterface[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term: string) => {
        if (term.length < 2) {
          return []
        } else {
          let cities: CommuneApiInterface[] = this.cities.filter((v: CommuneApiInterface) => v.nom.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10);
          this.maxLength = 100;
          if (!!cities && cities.length === 1) {
            this.maxLength = cities[0].nom.length;
            this.formCity = cities[0];
          }
          return cities
        }
      })
    )

  formatter = (x: { nom: string }) => x.nom;


  constructor (private http: HttpService, private router: Router) {
    this.http.getAllCity().subscribe((value: CommuneApiInterface[]) => this.cities = value)
  }

  onSubmit () {
    if (this.formCity) {
      this.setCityEvent.emit(this.formCity.nom)
    }
  }
}
