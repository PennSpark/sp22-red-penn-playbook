import React, { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./style.scss";
import "./RicePurity.scss";
import rice from "./img/rice.gif"
import { Spring, useSpring, config, animated } from 'react-spring';

const RicePurity = (p) => {
  const props = useSpring({ val: 5.9, from: { val: 0 }, delay: 100, reset: true, config: { duration: 1000 } });
  const [on, set] = useState(true);

  console.log(p.slide)
  console.log(p.slide == 2)
  function isOnSlide() {
    if (Number(p.slide) == 2) {
      console.log("render"
      )
      set(!on)

    }
  }
  return (
    <div className="pw-container rp-block">
      <div className="rp-left" />
      <div id="rp-text">
        <h1>On average, our rice purity score dropped <span style={{ color: "#577ED2" }}>
          {isOnSlide}
          <animated.div key={on} className="number">
            {props.val.interpolate(val => val.toFixed(1))}
          </animated.div>
        </span></h1>
      </div>
      <div className="rp-right" />
      <img id="rp-img" src={rice} />
    </div>
  );
};

export default RicePurity;
