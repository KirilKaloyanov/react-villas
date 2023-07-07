import useFetchWeather from "../../../../services/useFetchWeather.ts";

import { Iweather } from "../../../../interfaces/weather/index.ts";

import s from "./Weather.module.css";

export default function Weather() {
  const { data, isLoading } = useFetchWeather<Iweather>("forecast");

  function weatherIcon(data: Iweather) {
    if (data.current.precip_mm >= 1) return "cloudy_snowing";
    if (data.current.cloud > 50) return "wb_cloudy";
    if (data.current.is_day > 0) return "sunny";
    return "nights_stay";
  }

  if (!isLoading && data)
    return (
      <div>
        {data.current.temp_c}
        <sup className={s.superText}>&deg;C</sup>
        <span className={"material-icons " + s.icon}>{weatherIcon(data)}</span>
      </div>
    );

  return null;
}
