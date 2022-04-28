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

const NumDates = () => {
  return (
    <div className="pw-container nd-block">
      <h1>"How many people have you gone on dates with this year?"</h1>
      <div className="nd-roses">
        <div>
          <img src={Nd0} alt="44.9% went on 0 dates" />
          <p className="nd-caption"><span className="nd-stat">
              44.9%
            </span><br/>
            went on<br/><span className="nd-num-dates">
                0
            </span><br/>dates</p>
        </div>
        <div>
          <img src={Nd1} alt="33.3% went on 1 date" />
          <p className="nd-caption"><span className="nd-stat">
              33.3%
            </span><br/>
            went on<br/><span className="nd-num-dates">
                1
            </span><br/>date</p>
        </div>
        <div>
          <img src={Nd2} alt="8.2% went on 2 dates" />
          <p className="nd-caption"><span className="nd-stat">
              8.2%
            </span><br/>
            went on<br/><span className="nd-num-dates">
                2
            </span><br/>dates</p>
        </div>
        <div>
          <img src={Nd3} alt="4.1% went on 3 dates" />
          <p className="nd-caption"><span className="nd-stat">
              4.1%
            </span><br/>
            went on<br/><span className="nd-num-dates">
                3
            </span><br/>dates</p>
        </div>
        <div>
          <img src={Nd4} alt="4.1% went on 4 dates" />
          <p className="nd-caption"><span className="nd-stat">
              4.1%
            </span><br/>
            went on<br/><span className="nd-num-dates">
                4
            </span><br/>dates</p>
        </div>
        <div>
          <img src={Nd5} alt="0.7 % went on 5 dates" />
          <p className="nd-caption"><span className="nd-stat">
              0.7%
            </span><br/>
            went on<br/><span className="nd-num-dates">
                5
            </span><br/>dates</p>
        </div>
        <div>
          <img src={Nd6} alt="4.8% went on 6+ dates" />
          <p className="nd-caption"><span className="nd-stat">
              4.8%
            </span><br/>
            went on<br/><span className="nd-num-dates">
                6+
            </span><br/>dates</p>
        </div>
      </div>
    </div>
  );
};

export default NumDates;
