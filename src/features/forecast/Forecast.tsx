import useFetchWeather from "../../services/useFetchWeather";

import { Iforecast } from "../../interfaces/weather";

import formatDate from "../../utils/formatDate";

export default function Forecast() {
  const { data, isLoading } = useFetchWeather<Iforecast>("forecast");

  if (!data || isLoading) return null;

  return (
    <>
      <div style={{ fontSize: "3rem" }}>
        {data.forecast.forecastday.map((i) => (
          <li>
            {formatDate(i.date_epoch)} - {i.day.maxtemp_c}&deg;C -{" "}
            {i.day.condition.text}
          </li>
        ))}
      </div>
    </>
  );
}
