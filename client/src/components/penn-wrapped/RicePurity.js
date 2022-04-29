import React, { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./style.scss";
import "./RicePurity.scss";
import rice from "./img/rice.GIF"

const RicePurity = () => {
  return (
    <div className="pw-container rp-block">
      <div className="rp-left" />
      <div id="rp-text">
          <h1>On average, our rice purity score dropped <span style={{color: "#577ED2"}}>5.9 points</span>.</h1>
      </div>
      <div className="rp-right" />
        {/* <img id="rp-img" src={rice} /> */}
    </div>
  );
};

export default RicePurity;
