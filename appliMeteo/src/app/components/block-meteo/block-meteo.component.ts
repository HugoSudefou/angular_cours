import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { OpenWeatherForecastInterface, OpenWeatherListInterface } from '../../schemas/interfaces'

@Component({
  selector: 'app-block-meteo',
  templateUrl: './block-meteo.component.html',
  styleUrls: ['./block-meteo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlockMeteoComponent {

  @Input() dataForMeteoNow: OpenWeatherListInterface | null = null;
  @Input() dataForMeteo: OpenWeatherForecastInterface | null = null;

  constructor () {
  }

}
