import useFetchWeather from "../../../../services/useFetchWeather.ts";

import { IWeather } from "../../../../interfaces/weather/weather.ts";

import s from "./Weather.module.css";

export default function Weather() {
  const { data, isLoading } = useFetchWeather<IWeather[]>("current");

  let currentWeather: IWeather | null = null;

  if (data) currentWeather = data[0];

  function weatherIcon(data: IWeather) {
    if (data.Precip1hr.Metric.Value >= 1) return "cloudy_snowing";
    if (data.CloudCover > 50) return "wb_cloudy";
    if (data.IsDayTime) return "sunny";
    return "nights_stay";
  }

  if (!isLoading && currentWeather)
    return (
      <div>
        {currentWeather.Temperature.Metric.Value}
        <sup className={s.superText}>&deg;C</sup>
        <span className={"material-icons " + s.icon}>
          {weatherIcon(currentWeather)}
        </span>
      </div>
    );

  return null;
}
