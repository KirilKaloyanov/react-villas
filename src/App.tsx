import "./App.css";
import Hero from "./features/home/hero/Hero.tsx";
import Forecast from "./features/forecast/Forecast.tsx";
import Region from "./features/region/region.tsx";
import Slider from "./features/slider/slider.tsx";

function App() {
  return (
    <>
      <Hero />
      <Forecast />
      <Region />
      <Slider />
    </>
  );
}

export default App;
