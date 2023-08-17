import useFetchWeather from "../../services/useFetchWeather";

import { IForecast } from "../../interfaces/weather/weather.ts";

import formatDate from "../../utils/formatDate";

import s from "./Forecast.module.css";

export default function Forecast() {
  const { data, isLoading } = useFetchWeather<IForecast>("forecast");

  function roundNumber(temp: number) {
    return Math.floor(Math.round(temp));
  }

  if (!data || isLoading) return null;

  return (
    <>
      <h3>Прогноза за времето</h3>
      <div className={s.forecast}>
        {data.DailyForecasts.map((item, index) => {
          if (index < 3)
            return (
              <div key={item.EpochDate} className={s.forecastDay}>
                <div className={s.date}>{formatDate(item.EpochDate)}</div>
                <div className={s.temp}>
                  {roundNumber(item.Temperature.Maximum.Value)}&deg;C
                  <img
                    src={`https://developer.accuweather.com/sites/default/files/${
                      item.Day.Icon < 10 ? "0" + item.Day.Icon : item.Day.Icon
                    }-s.png`}
                    alt={`${item.Day.IconPhrase}`}
                  />
                </div>
              </div>
            );
        })}
      </div>
    </>
  );
}
