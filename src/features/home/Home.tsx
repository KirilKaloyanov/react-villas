import { useEffect, useState } from "react";

import homeView from "../../assets/img/homeViewRight.jpg";
import s from "./Home.module.css";

interface Iinfo {
  temp: string;
  cloud: number;
  rain: number;
}

interface Iweather {
  loaded: boolean;
  info: Iinfo;
  error: {} | null;
}

function Home() {
  const [weather, setWeather] = useState<Iweather>({
    loaded: false,
    info: {
      temp: "",
      cloud: 0,
      rain: 0,
    },
    error: null,
  });

  useEffect(() => {
    fetch(
      "http://api.weatherapi.com/v1/current.json?key=49ff9d66da0d49aea6a91332230107&q=41.962910, 23.730058"
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather((oldState) => {
          const info = {
            temp: data.current.feelslike_c,
            cloud: data.current.cloud,
            rain: data.current.precip_mm,
          };
          return {
            ...oldState,
            loaded: true,
            info,
            error: null,
          };
        });
      })
      .catch((err) =>
        setWeather((oldState) => {
          return { ...oldState, loaded: false, error: err };
        })
      );
  }, []);

  function weatherIcon() {
    if (weather.info.rain > 0) return "cloudy_snowing";
    if (weather.info.cloud > 60) return "wb_cloudy";
    return "sunny";
  }

  return (
    <>
      <div className={s.hero}>
        <div className={s.villaOrt}>Villa Ortsevo</div>
        <div className={s.textWrapper}>
          <div className={s.weatherInfo}>
            {weather.loaded && (
              <div>
                {weather.info.temp ?? " "}
                <sup className={s.superText}>&deg;C</sup>
                <span className={"material-icons " + s.icon}>
                  {weatherIcon()}
                </span>
              </div>
            )}
            <span className={s.location}>
              с. Орцево, <br /> България
            </span>
          </div>
        </div>
        <div className={s.mask}>
          <img src={homeView} className={s.image} />
        </div>
      </div>
    </>
  );
}

export default Home;
