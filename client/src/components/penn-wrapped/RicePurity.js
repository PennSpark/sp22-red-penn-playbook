import React, { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./style.scss";
import "./RicePurity.scss";
// import rice from "./img/rice.gif"

const RicePurity = () => {
  return (
    <div className="pw-container rp-block">
      <div className="spacer-10" />
      <div id="rp-text">
          <h1>On average, our rice purity score dropped <span style={{color: "#577ED2"}}>5.9 points</span>.</h1>
          <p>For these reasons...</p>
      </div>
      <div className="spacer-3" />
        {/* <img id="rp-img" src={rice} /> */}
      <div className="spacer-10" />
    </div>
  );
};

export default RicePurity;
