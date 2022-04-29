import React, { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./NumDates.scss";
import Nd0 from "./img/nd/nd-0.svg";
import Nd1 from "./img/nd/nd-1.svg";
import Nd2 from "./img/nd/nd-2.svg";
import Nd3 from "./img/nd/nd-3.svg";
import Nd4 from "./img/nd/nd-4.svg";
import Nd5 from "./img/nd/nd-5.svg";
import Nd6 from "./img/nd/nd-6.svg";
import { Spring, useSpring, config, animated } from 'react-spring';


const NumDates = (p) => {
  const props = useSpring({ val: 44.9, from: { val: 0 }, delay: 100, reset: true, config: { duration: 1000 } });
  const props1 = useSpring({ val: 33.3, from: { val: 0 }, delay: 100, reset: true, config: { duration: 1200 } });
  const props2 = useSpring({ val: 8.2, from: { val: 0 }, delay: 100, reset: true, config: { duration: 1400 } });
  const props21 = useSpring({ val: 8.2, from: { val: 0 }, delay: 100, reset: true, config: { duration: 1600 } });

  const props3 = useSpring({ val: 4.1, from: { val: 0 }, delay: 100, reset: true, config: { duration: 1800 } });
  const props4 = useSpring({ val: 0.7, from: { val: 0 }, delay: 100, reset: true, config: { duration: 2000 } });
  const props5 = useSpring({ val: 4.8, from: { val: 0 }, delay: 100, reset: true, config: { duration: 2200 } });
  const [on, set] = useState(true);
  function isOnSlide() {
    if (Number(p.slide) == 2) {
      console.log("render"
      )
      set(!on)

    }
  }

  return (
    <div className="pw-container nd-block">
      <h1>"How many people have you gone on dates with this semester?"</h1>
      <div className="nd-roses">
        <div>
          <img src={Nd0} alt="44.9% went on 0 dates" />
          <p className="nd-caption"><span className="nd-stat">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <animated.div key={on} className="number">
                {props.val.interpolate(val => val.toFixed(1))}
              </animated.div>
              %
            </div>
          </span><br />
            <span className="nd-num-dates">
              0
            </span></p>
        </div>
        <div>
          <img src={Nd1} alt="33.3% went on 1 date" />
          <p className="nd-caption"><span className="nd-stat">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <animated.div key={on} className="number">
                {props1.val.interpolate(val => val.toFixed(1))}
              </animated.div>
              %
            </div>
          </span><br />
            <span className="nd-num-dates">
              1
            </span></p>
        </div>
        <div>
          <img src={Nd2} alt="8.2% went on 2 dates" />
          <p className="nd-caption"><span className="nd-stat">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <animated.div key={on} className="number">
                {props2.val.interpolate(val => val.toFixed(1))}
              </animated.div>
              %
            </div>
          </span><br />
            <span className="nd-num-dates">
              2
            </span></p>
        </div>
        <div>
          <img src={Nd3} alt="4.1% went on 3 dates" />
          <p className="nd-caption"><span className="nd-stat">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <animated.div key={on} className="number">
                {props2.val.interpolate(val => val.toFixed(1))}
              </animated.div>
              %
            </div>
          </span><br />
            <span className="nd-num-dates">
              3
            </span></p>
        </div>
        <div>
          <img src={Nd4} alt="4.1% went on 4 dates" />
          <p className="nd-caption"><span className="nd-stat">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <animated.div key={on} className="number">
                {props3.val.interpolate(val => val.toFixed(1))}
              </animated.div>
              %
            </div>
          </span><br />
            <span className="nd-num-dates">
              4
            </span></p>
        </div>
        <div>
          <img src={Nd5} alt="0.7 % went on 5 dates" />
          <p className="nd-caption"><span className="nd-stat">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <animated.div key={on} className="number">
                {props4.val.interpolate(val => val.toFixed(1))}
              </animated.div>
              %
            </div>
          </span><br />
            <span className="nd-num-dates">
              5
            </span></p>
        </div>
        <div>
          <img src={Nd6} alt="4.8% went on 6+ dates" />
          <p className="nd-caption"><span className="nd-stat">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <animated.div key={on} className="number">
                {props5.val.interpolate(val => val.toFixed(1))}
              </animated.div>
              %
            </div>
          </span><br />
            <span className="nd-num-dates">
              6+
            </span></p>
        </div>
      </div>
    </div>
  );
};

export default NumDates;
