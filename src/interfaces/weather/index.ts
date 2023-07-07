import IcurrentWeather from "./current";
import IlocationWeather from "./location";
import { IdetailedForecastWrapper } from "./forecast";

export interface Iweather {
  current: IcurrentWeather;
  location: IlocationWeather;
}

export interface Iforecast {
  location: IlocationWeather;
  current: IcurrentWeather;
  forecast: IdetailedForecastWrapper;
}
