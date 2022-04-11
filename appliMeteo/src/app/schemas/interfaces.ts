export interface CommuneApiInterface {
  nom: string;
  code: string;
  codesPostaux: string;
  codeDepartement: string;
  codeRegion: string[];
  population: string;
}

export interface OpenWeatherForecastInterface {
  cod: string;
  message: number;
  cnt: number;
  list: OpenWeatherListInterface[];
  city: {
    id: number;
    name: string;
    coord: OpenWeatherCoordoneesInterface;
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  }
}

export interface OpenWeatherListInterface{
  id?: number;
  dt: number;
  main: OpenWeatherMainInterface;
  weather: OpenWeatherArrayWeatherInterface[];
  clouds: {
    all: number
  };
  wind: OpenWeatherWindInterface;
  base?: string;
  visibility: number;
  pop?: number;
  sys: {
    pod: number;
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  dt_txt?: number;
  coord?: OpenWeatherCoordoneesInterface;
  name?: string;
  cod?: number;
  timezone?: number;
}

export interface OpenWeatherArrayWeatherInterface {
  id: number;
  main: string;
  description: string;
  icon: string
}

export interface OpenWeatherCoordoneesInterface {
  lat: number;
  lon: number
}

export interface OpenWeatherWindInterface {
  speed: number;
  deg: number;
  gust?: number
}

export interface OpenWeatherWindInterface {
  id?: number;
  type?: number;
  country?: string;
  sunrise?: number;
  sunset?: number;
  pod?: string;
}


export interface OpenWeatherMainInterface {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level?: number;
  grnd_level?: number;
  humidity: number;
  temp_kf?: number
}


