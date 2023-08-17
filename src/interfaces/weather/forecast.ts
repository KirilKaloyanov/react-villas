export interface IdetailedForecastWrapper {
  forecastday: IdetailedForecast[];
}

export interface IdetailedForecast {
  astro: {};
  date: string;
  date_epoch: number;
  day: IdetailedForecastDay;
  hour: {
    cloud: number;
    condition: {};
  }[];
}

export interface IdetailedForecastDay {
  condition: { text: String; icon: string; code: number };
  daily_will_it_rain: number;
  daily_will_it_snow: number;
  maxtemp_c: number;
  mintemp_c: number;
  totalsnow_cm: number;
}
