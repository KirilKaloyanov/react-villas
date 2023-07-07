import Weather from "./weather/Weather.tsx";

import homeView from "../../../assets/img/homeViewRight.jpg";

import s from "./Hero.module.css";

function Hero() {
  return (
    <>
      <div className={s.hero}>
        <div className={s.villaOrt}>Villa Ortsevo</div>
        <div className={s.weatherInfo}>
          <Weather />
          <span className={s.location}>
            с. Орцево, <br /> България
          </span>
        </div>
        <div className={s.mask}>
          <img src={homeView} className={s.image} />
        </div>
      </div>
    </>
  );
}

export default Hero;
