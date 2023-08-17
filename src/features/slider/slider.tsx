import { useEffect, useState } from "react";
import view1 from "../../assets/img/villaBackView.jpg";
import view2 from "../../assets/img/bedroom.jpg";
import view3 from "../../assets/img/bedroomView.jpg";

import s from "./slider.module.css";

export default function Slider() {
  const [offset, setOffset] = useState("0");

  const divStyle = {
    transform: `translateX(${offset})`,
    transition: `transform 0.7s ease-out`,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (offset == "0") setOffset("-90vw");
      if (offset == "-90vw") setOffset("-180vw");
      if (offset == "-180vw") setOffset("0");
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [divStyle]);

  return (
    <div className={s.background}>
      <div className={s.carousel}>
        <img src={view1} className={s.image} style={divStyle} />
        <img src={view2} className={s.image} style={divStyle} />
        <img src={view3} className={s.image} style={divStyle} />
      </div>
    </div>
  );
}
