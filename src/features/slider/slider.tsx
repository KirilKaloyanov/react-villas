import { useEffect, useState } from "react";
import view1 from "../../assets/img/villaBackView.jpg";
import view2 from "../../assets/img/bedroom.jpg";
import view3 from "../../assets/img/bedroomView.jpg";

import s from "./slider.module.css";

export default function Slider() {
  const [offset, setOffset] = useState("0px");

  const divStyle = {
    transform: `translateX(${offset})`,
    transition: `transform 0.7s ease-out`,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (offset == "0px") setOffset("-1422px");
      if (offset == "-1422px") setOffset("-2844px");
      if (offset == "-2844px") setOffset("0px");
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [divStyle]);

  return (
    <div className={s.background}>
      <div className={s.carousel}>
        <img src={view1} style={divStyle} />
        <img src={view2} style={divStyle} />
        <img src={view3} style={divStyle} />
      </div>
    </div>
  );
}
